import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  pokemonList$!: Observable<any[]>;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.pokemonList$ = this.apiService.getFirstTwentyPokemon()
    console.log(this.pokemonList$);
  }
  
  
}
