import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from "@angular/common/http";import { Observable, map } from 'rxjs';
import { PokemonList } from '../shared/pokemon.list';
import { Pokemon } from '../shared/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseUrl = 'https://pokeapi.co/api/v2/';

  constructor(private http: HttpClient) {}

  getPokemonList(offset: number, limit: number = 50) : Observable<PokemonList[]> {
    return this.http.get<PokemonList[]>(this.baseUrl + 'pokemon?offset=' + offset + '&limit=' + limit)
    .pipe(
        map((x: any) => x.results)
    );
  }

  getPokemonDetail(pokemon: number | string): Observable<Pokemon> {
    return this.http.get<Pokemon>(this.baseUrl + 'pokemon/' + pokemon);
  }

 
}
