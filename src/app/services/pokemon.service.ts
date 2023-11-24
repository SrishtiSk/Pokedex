import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, Subject, map } from 'rxjs';
import { PokemonList } from '../shared/pokemon.list';
import { Pokemon } from '../shared/pokemon.model';
import { SpeciesDetails } from '../shared/pokemon.model';
@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseUrl = 'https://pokeapi.co/api/v2/';

  activePokemon = new Subject<Pokemon>() ;
  
  constructor(private http: HttpClient) {}

  getPokemonList(offset: number, limit: number = 250) : Observable<PokemonList[]> {
    return this.http.get<PokemonList[]>(this.baseUrl + 'pokemon?offset=' + offset + '&limit=' + limit)
    .pipe(
        map((x: any) => x.results)
    );
  }

  getPokemonDetail(pokemon: number | string): Observable<Pokemon> {
    return this.http.get<Pokemon>(this.baseUrl + 'pokemon/' + pokemon);
  }
  getPokemonSpeciesDetails(pokemon:number|string):Observable<SpeciesDetails>{
    return this.http.get<SpeciesDetails>(this.baseUrl + 'pokemon-species/'+pokemon);
  }

}
