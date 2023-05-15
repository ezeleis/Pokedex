import { Component, OnInit, ViewChild  } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';
import { DetailsComponent } from '../details/details.component';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @ViewChild('childModal') childModal!: DetailsComponent;
  pokemonList$!: Observable<any[]>;

  constructor(private apiService: ApiService) { }

  openModal(pokemon: any) {
    this.childModal.openModal(pokemon);
  }

  ngOnInit(): void {
    this.pokemonList$ = this.apiService.getFirstTwentyPokemon()
    console.log(this.pokemonList$);
  }
  
  
}
