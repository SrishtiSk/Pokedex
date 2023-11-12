import { Component } from '@angular/core';
import { Pokemon } from '../shared/pokemon.model';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent {
 pokemon:Pokemon | undefined;
 
}
