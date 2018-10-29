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
  book = { 'title': null, 'slug': null, 'author': null, 'userId': null, 'isbn': null, 'version': null, 'publicationYear': null, 'countries': null, 'specialty': null, 'image': null, 'description': null, 'index': null, 'keyPoints': null, 'numberPages': null, 'volume': null };

  constructor() { }

  ngOnInit() {
    this.loader.show = false;
    this.showForm = true;
  }

  //Function to save book
  saveBook(val) {
    console.log(val)
    console.log(this.book)
  }

  //Function to get changes in book page tabs
  changeSectionBook(e: any) {
    switch (e.index) {
      case 0:
        this.sectionTitle = 'Ajustes básicos'
        break;
      
      case 1:
        this.sectionTitle = 'Inventario'
        break;

      case 2:
        this.sectionTitle = 'Precios'
        break;

      case 3:
        this.sectionTitle = 'Transporte'
        break;

      case 4:
        this.sectionTitle = 'Optimización SEO'
        break;
    
      default:
        break;
    } 
  }

}
