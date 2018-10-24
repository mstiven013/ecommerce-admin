import { Component, OnInit } from '@angular/core';
import { GetBooksService } from 'src/app/services/books/books.service';

@Component({
  selector: 'app-all-books-page',
  templateUrl: './all-books-page.component.html',
  styleUrls: ['../../account-tmp/account-tmp.component.scss']
})
export class AllBooksPageComponent implements OnInit {

  //Declare variables
  books: any = []
  loader = { show: true, position: 'absolute', align: 'top', mode: "indeterminate" }
  showInfo: Boolean = false
  error = { show: false, msg: '' }

  constructor(
    protected _getBooksService: GetBooksService
  ) { }

  ngOnInit() {
    this.getBooksInfo()
  }

  getBooksInfo() {
    this._getBooksService.getAllBooks()
      .map(resp => resp.json())
      .subscribe(
        data => {
          console.log(data)
        },
        err => {
          console.log(err.json())
        }
      )
  }

}
