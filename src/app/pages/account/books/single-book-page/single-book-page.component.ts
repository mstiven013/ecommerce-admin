import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GetBooksService, UpdateBooksService } from 'src/app/services/books/books.service';
import { ActivatedRoute } from '@angular/router';

declare var jQuery;

@Component({
  selector: 'app-single-book-page',
  templateUrl: './single-book-page.component.html',
  styleUrls: ['../../account-tmp/account-tmp.component.scss']
})
export class SingleBookPageComponent implements OnInit {

  //Editor options
  showEditor = { description: true, index: true, keyPoints: false };

  //Declare vars
  private sub: any;
  sectionTitle: any = 'Ajustes básicos';
  loader = { show: true, position: 'absolute', align: 'top', mode: "indeterminate" }
  showForm = false;

  //Book object
  book = { _id: null, 'title': null, 'slug': null, 'author': null, 'userId': null, 'isbn': null, 'version': null, 'publicationYear': null, 'countries': null, 'specialty': null, 'image': null, 'description': null, 'index': null, 'keyPoints': null, 'numberPages': null, 'volume': null };

  constructor(
    protected _getBookService: GetBooksService,
    protected _updateBookService: UpdateBooksService,
    protected _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.sub = this._activatedRoute.params.subscribe(params => {
      this.getBookData(params.id)
    });
  }

  ngAfterViewInit() {
    jQuery('.normal-select').formSelect();
  }

  getBookData(id) {
    this._getBookService.getBooksById(id)
      .map(resp => resp.json())
      .subscribe(
        data => {
          jQuery('.normal-select').formSelect();
          this.book = data;
          this.loader.show = false;
          this.showForm = true;
        },
        err => {
          console.log(err)
        }
      )
  }

  //Function to save book
  saveBook(val) {
    this.loader.show = true;
    this._updateBookService.update(this.book, this.book._id)
      .map(resp => resp.json())
      .subscribe(
        data => {
          //console.log(data)
          this.book = data;
          this.loader.show = false;
          jQuery('.normal-select').formSelect();
        },
        err => {
          this.loader.show = false;
          console.log(err)
        }
      )
  }

  //Function to get changes in book page tabs
  changeSectionBook(e: any) {
    switch (e.index) {
      case 0:
        this.sectionTitle = 'Ajustes básicos'
        this.showEditor.description = true;
        this.showEditor.index = true;
        jQuery('.normal-select').formSelect();
        break;
      
      case 1:
        this.sectionTitle = 'Atributos'
        jQuery('.normal-select').formSelect();
        break;

      case 2:
        this.sectionTitle = 'Precios'
        jQuery('.normal-select').formSelect();
        break;

      /*
      case 3:
        this.sectionTitle = 'Transporte'
        break;

      case 4:
        this.sectionTitle = 'Optimización SEO'
        break;
        */
    
      default:
        break;
    } 
  }

}
