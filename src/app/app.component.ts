import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'PokeDex';
  pokemon = '';
  constructor() {
  }
  search(){
    // @ts-ignore
    let data = document.getElementById('search-input').value;
    if (data){
      this.pokemon = data.toLowerCase();
    }
  }
}
