import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Select2OptionData } from 'ng2-select2';

declare var jQuery: any;

@Component({
  selector: 'attributes-settings-book',
  templateUrl: './attributes-settings-book.component.html',
  styleUrls: ['../../../account-tmp/account-tmp.component.scss']
})
export class AttributesSettingsBookComponent {

  //Input vars
  @Input() book: any = {};

  constructor() {}

  ngOnInit() {
  }

  addAttribute() {
    this.book.attributes.push({name: '', price: 0})
  }

  deleteAttribute(name) {
    for (let i = 0; i < this.book.attributes.length; i++) {
      const element = this.book.attributes[i];

      if(element.name == name) {
        this.book.attributes.splice(i, 1);
      }
      
    }
  }
}