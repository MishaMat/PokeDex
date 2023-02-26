import {Component, OnInit} from '@angular/core';

import axios from "axios";

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  stepper_poke_list = [];
  poke_list = [];

  constructor() {

    // @ts-ignore
    this.poke_list.push([]);
    let counter = 0;
    let promises = [];


    for (let i = 1; i <= 108; i++) {
      promises.push(
        axios.get("https://pokeapi.co/api/v2/pokemon/" + i.toString()).then((resp) => {
          // @ts-ignore
          this.poke_list[counter].push([resp.data.name, resp.data.sprites.front_default]);
          if (i % 12 === 0) {
            // @ts-ignore
            this.poke_list.push([]);
            counter += 1;
          }
        })
      );
    }

    Promise.all(promises).then(() => {
      this.stepper_poke_list = this.poke_list;
    });
  }

  ngOnInit(): void {
  }


  addToLiked(name: string) {
    if (confirm('Like ' + name + ' ?')) {
      let d = localStorage.getItem('pokemon');
      if (d) {
        let poke_list = JSON.parse(d);
        let data = {name: name}
        let flag = true;
        for (let poke of poke_list) {
          if (poke.name == data.name) {
            flag = false
          }
        }
        if (flag) {
          poke_list.push(data)
        }
        localStorage.setItem('pokemon', JSON.stringify(poke_list))
      } else {
        let data = [{name: name}]
        localStorage.setItem('pokemon', JSON.stringify(data))
      }
    }
  }
}

