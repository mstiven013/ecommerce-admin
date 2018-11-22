import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Select2OptionData } from 'ng2-select2';

declare var jQuery: any;

@Component({
  selector: 'prices-settings-book',
  templateUrl: './prices-settings-book.component.html',
  styleUrls: ['../../../account-tmp/account-tmp.component.scss']
})
export class PricesSettingsBookComponent {

  //vars
  stateOptions = [
    { value: "STOCK", name: "Disponible" },
    { value: "RESERVED", name: "Reservado" },
    { value: "SPENT", name: "Agotado" }
  ]

  //Input vars
  @Input() book: any = {};

  constructor() {}

  ngOnInit() {
    jQuery('.normal-select').formSelect();
  }

  ngAfterViewInit() {
    jQuery('.normal-select').formSelect();
  }

  addCountry() {
    jQuery('.normal-select').formSelect();
    this.book.countries.push({name: '', price: 0})
  }

  deleteCountry(name) {
    for (let i = 0; i < this.book.countries.length; i++) {
      const element = this.book.countries[i];

      if(element.name == name) {
        this.book.countries.splice(i, 1);
      }
      
    }
  }
}