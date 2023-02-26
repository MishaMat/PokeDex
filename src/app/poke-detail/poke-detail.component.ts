import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import axios from "axios";

@Component({
  selector: 'app-poke-detail',
  templateUrl: './poke-detail.component.html',
  styleUrls: ['./poke-detail.component.css']
})
export class PokeDetailComponent {

  constructor(private route: ActivatedRoute) {
  }

  poke_name: string = "";
  type_1 = "";
  type_2 = "";
  photo_front = "";
  photo_back = "";
  weight = 0;
  height = 0;
  hp = 0;
  attack = 0;
  defense = 0;
  special_attack = 0;
  special_defense = 0;
  speed = 0;

  ngOnInit() {
    // 'bank' is the name of the route parameter
    this.poke_name = this.route.snapshot.params['name'];

    axios.get('https://pokeapi.co/api/v2/pokemon/' + this.poke_name).then(resp => {
      this.type_1 = resp.data.types[0].type.name;
      if (resp.data.types.length == 2) {
        this.type_2 = resp.data.types[1].type.name;
      }
      this.photo_front = resp.data.sprites.front_default;
      this.photo_back = resp.data.sprites.back_default;
      this.weight = resp.data.weight;
      this.height = resp.data.height;
      this.hp = resp.data.stats[0].base_stat;
      this.attack = resp.data.stats[1].base_stat;
      this.defense = resp.data.stats[2].base_stat;
      this.special_attack = resp.data.stats[3].base_stat;
      this.special_defense = resp.data.stats[4].base_stat;
      this.speed = resp.data.stats[5].base_stat;
    })
  }

}
