import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

interface PokemonListResponse {
  results: { name: string, url: string }[];
}

interface PokemonResponse {
  sprites: {
    front_default: string;
    other?: {
      ['official-artwork']: {
        front_default: string;
      };
    };
  };
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) { }

  getFirstTwentyPokemon(): Observable<PokemonResponse[]> {
    return this.http.get<PokemonListResponse>(`${this.apiUrl}/pokemon?limit=20`)
      .pipe(
        map(response => response.results),
        map(pokemonList => pokemonList.map(pokemon => this.http.get<PokemonResponse>(pokemon.url))),
        mergeMap(requests => forkJoin(requests))
      );
  }
}
