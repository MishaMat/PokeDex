import {Component} from '@angular/core';
import axios from "axios";


@Component({
  selector: 'app-liked',
  templateUrl: './liked.component.html',
  styleUrls: ['./liked.component.css'],
})
export class LikedComponent {
  items: any;
  poke_list = [];
  final_poke_list = [];

  constructor() {
    let promises = [];
    let data = localStorage.getItem('pokemon');
    // @ts-ignore
    this.items = JSON.parse(data);

    for (let item of this.items) {
      promises.push(
        axios.get("https://pokeapi.co/api/v2/pokemon/" + item.name).then(resp => {
          // @ts-ignore
          this.poke_list.push([resp.data.name, resp.data.sprites.front_default])
        })
      )
    }
    Promise.all(promises).then(() => {
      this.final_poke_list = this.poke_list;
    });
  }

  deleteFromLiked(name:string) {
    if (confirm('Dislike ' + name + ' ?')) {
      let d = localStorage.getItem('pokemon');
      if (d) {
        let final_list = []
        let poke_list = JSON.parse(d);
        for (let i of poke_list) {
          if (i.name != name) {
            final_list.push(i)
          }
        }
        localStorage.setItem('pokemon', JSON.stringify(final_list));
      }
      window.location.reload();
    }
  }
}
