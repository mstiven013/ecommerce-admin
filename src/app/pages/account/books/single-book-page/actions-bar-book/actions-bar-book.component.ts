import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'actions-bar-book',
  templateUrl: './actions-bar-book.component.html',
  styleUrls: ['../../../account-tmp/account-tmp.component.scss']
})
export class ActionsBarBookComponent {

  @Output() saved = new EventEmitter<boolean>();

  save(val: boolean) {
    this.saved.emit(val);
  }

}