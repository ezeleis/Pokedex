import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  
	constructor(private modalService: NgbModal) {}

	openModal(content: any) {
    this.modalService.open(content, { backdropClass: 'light-blue-backdrop' });
   
  }
  
}
