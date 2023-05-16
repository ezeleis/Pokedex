import { Component, Input, TemplateRef,ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  @Input() pokemon: any;
  pokemonData: any;
  @ViewChild('content') content!: TemplateRef<any>;
  constructor(private modalService: NgbModal, private httpClient: HttpClient) {}

  openModal(pokemon: any) {
    this.pokemon = pokemon;
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`;
    this.httpClient.get<any>(apiUrl).subscribe(
      (data) => {
        this.pokemonData = data;
        this.modalService.open(this.content, { modalDialogClass: 'dark-modal' });
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
