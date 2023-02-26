import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MatStepperModule} from '@angular/material/stepper';

import {AppComponent} from './app.component';
import {PokemonComponent} from './pokemon/pokemon.component';
import {HomeComponent} from './home/home.component';
import {LikedComponent} from './liked/liked.component';
import {ContactsComponent} from './contacts/contacts.component';
import {RouterModule, Routes} from "@angular/router";
import {PokeDetailComponent} from './poke-detail/poke-detail.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import { DialogExComponent } from './dialog-ex/dialog-ex.component';

const appRoute: Routes = [
  {path: '', component: HomeComponent},
  {path: 'pokedex', component: PokemonComponent},
  {path: 'liked', component: LikedComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'pokemon/:name', component: PokeDetailComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    HomeComponent,
    LikedComponent,
    ContactsComponent,
    PokeDetailComponent,
    DialogExComponent
  ],
  entryComponents:[DialogExComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute),
    BrowserAnimationsModule,
    MatStepperModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
