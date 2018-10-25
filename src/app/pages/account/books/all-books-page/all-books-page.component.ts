import { Component, OnInit, ViewChild } from '@angular/core';
import { GetBooksService } from 'src/app/services/books/books.service';
import { MatPaginator, MatSort, MatTableDataSource, Sort } from '@angular/material';

@Component({
  selector: 'app-all-books-page',
  templateUrl: './all-books-page.component.html',
  styleUrls: ['../../account-tmp/account-tmp.component.scss']
})
export class AllBooksPageComponent implements OnInit {

  //Declare variables
  loader = { show: true, position: 'absolute', align: 'top', mode: "indeterminate" }
  showInfo: Boolean = false
  error = { show: false, msg: '' }

  books: any[] = [];
  displayedColumns: string[] = ['image', 'title', 'specialty[0].title', 'isbn', 'state', 'actions'];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    protected _getBooksService: GetBooksService
  ) { }

  ngOnInit() {
    this.getBooksInfo()
  }

  ngAfterViewInit() {
  }

  getBooksInfo() {
    this._getBooksService.getAllBooks()
      .map(resp => resp.json())
      .subscribe(
        data => {
          this.books = data;
          this.dataSource = new MatTableDataSource(data);
          this.loader.show = false;
          this.showInfo = true;
          
          this.dataSource.sort = this.sort
          setTimeout(() => {
            this.dataSource.paginator = this.paginator
          })
        },
        err => {
          console.log(err.json())
          this.loader.show = false;
          this.error.show = true;
          this.error.msg = 'Ha ocurrido un error';
        }
      )
  }

  booksFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
