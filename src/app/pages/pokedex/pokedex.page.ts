import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonButton, IonLabel, IonCardHeader, IonCardContent, IonItem, IonCardTitle, IonImg, IonList, IonCard } from '@ionic/angular/standalone';
import { HttpClient } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.page.html',
  styleUrls: ['./pokedex.page.scss'],
  standalone: true,
  imports: [IonCard, IonList, IonImg, IonCardTitle, IonItem, IonCardContent, IonCardHeader, IonLabel, IonButton, IonInput, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class PokedexPage implements OnInit {
  targetPokemon?: string;
  pokemon: any = null;
  apiUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  getPokemonInfo(name: string){
    if (!name) return;
    this.pokemon = null;

    const url = `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`;

    this.http.get<any>(url).pipe(
      catchError(error => {
        console.error('Error al obtener datos del Pokémon:', error);
        return throwError(() => new Error('No se pudo obtener el Pokémon.'));
      })
    ).subscribe((response: any) => {
      console.log(response);
      this.pokemon = {
        abilities: response.abilities,
        image: response.sprites.front_default,
        baseExp: response.base_experience
      }
      console.log(this.pokemon);
    }, error => {
      console.log(error);
    });
  }
}
