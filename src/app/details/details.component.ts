import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  @Input() pokemon: any;
	constructor(private modalService: NgbModal) {}

  openModal(pokemon: any) {
    this.pokemon = pokemon;
    this.modalService.open('content', { backdropClass: 'light-blue-backdrop' });
  }
}
