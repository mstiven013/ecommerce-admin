import { Component, OnInit, ViewChild } from '@angular/core';
import { GetBooksService } from 'src/app/services/books/books.service';
import { MatPaginator, MatSort, MatTableDataSource, Sort } from '@angular/material';
import { GetSpecialtiesService } from 'src/app/services/specialties/specialties.service';

declare var jQuery: any;

@Component({
  selector: 'app-all-books-page',
  templateUrl: './all-books-page.component.html',
  styleUrls: ['../../account-tmp/account-tmp.component.scss']
})
export class AllBooksPageComponent implements OnInit {

  //Declare variables
  loader = { show: true, moreBooks: false, position: 'absolute', align: 'top', mode: "indeterminate" }
  showInfo: Boolean = false
  error = { show: false, msg: '' }

  limitBooks = 300;
  skipBooks = 0;
  loadMoreFlag = false;

  books: any[] = [];
  displayedColumns: string[] = ['image', 'title', 'specialty[0].title', 'isbn', 'state', 'actions'];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    protected _getBooksService: GetBooksService,
    protected _getSpecialtiesService: GetSpecialtiesService
  ) { }

  ngOnInit() {
    let me = this;
    this.getBooksInfo()
  }

  ngAfterViewInit() {
    jQuery('.normal-select').formSelect();
  }

  getBooksInfo() {
    let me = this;

    this._getBooksService.getAllBooks(300, 0)
      .map(resp => resp.json())
      .subscribe(
        data => {
          this.books = data;
          this.dataSource = new MatTableDataSource(data);
          this.loader.show = false;
          this.showInfo = true;

          this.skipBooks = this.dataSource.data.length;
          
          this.dataSource.sort = this.sort

          setTimeout(() => {
            me.dataSource.paginator = me.paginator
          })

          setTimeout(() => {
            me.loadMoreBooks(me.limitBooks, me.skipBooks)
          }, 1000)

          setTimeout(() => {
            me.loadMoreFlag = false;
            me.loadMoreBooks(me.limitBooks, me.skipBooks)
          }, 20000)

          setTimeout(() => {
            me.loadMoreFlag = false;
            me.loadMoreBooks(me.limitBooks, me.skipBooks)
          }, 40000)

        },
        err => {
          console.log(err.json())
          this.loader.show = false;
          this.error.show = true;
          this.error.msg = 'Ha ocurrido un error';
        }
      )
  }

  loadMoreBooks(max, limit) {
    this.loader.moreBooks = true;
    this._getBooksService.getAllBooks(max, limit)
      .map(resp => resp.json())
      .subscribe(
        data => {
          let nuevo = this.dataSource.data;

          data.forEach(element => {
            nuevo.push(element);
          });

          this.dataSource.data = nuevo;
          this.skipBooks = this.dataSource.data.length;

          this.loader.moreBooks = false;
          this.loadMoreFlag = true;
        },
        err => {
          this.loader.moreBooks = false;
          console.log(err)
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
