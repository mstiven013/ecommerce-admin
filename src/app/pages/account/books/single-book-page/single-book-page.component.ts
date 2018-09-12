import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-single-book-page',
  templateUrl: './single-book-page.component.html',
  styleUrls: ['../../account-tmp/account-tmp.component.scss']
})
export class SingleBookPageComponent implements OnInit {

  //Declare vars
  sectionTitle: any = 'Ajustes básicos';
  loader = { show: true, position: 'absolute', align: 'top', mode: "indeterminate" }
  showForm = false;

  //Book object
  book = {
    'title': null,
    'slug': null,
    'author': null,
    'userId': null,
    'isbn': null,
    'version': null,
    'publicationYear': null,
    'countries': null,
    'specialty': null,
    'image': null,
    'description': null,
    'index': null,
    'keyPoints': null,
    'numberPages': null,
    'volume': null,
  }

  constructor() { }

  ngOnInit() {
    this.loader.show = false;
    this.showForm = true;
  }

  changeSectionBook(e: any) {
    
  }

  //Function to save book
  saveBook(frm) {
    console.log(frm.value)
  }

}
