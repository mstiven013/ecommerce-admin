import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, Sort } from '@angular/material';
import { GetAuthorsService } from '../../../../services/authors/authors.service';
import { MapErrorService } from '../../../../services/error/map-error.service';

@Component({
  selector: 'app-all-authors-page',
  templateUrl: './all-authors-page.component.html',
  styleUrls: ['../../account-tmp/account-tmp.component.scss']
})
export class AllAuthorsPageComponent {
    constructor(
        private _getAuthorsService: GetAuthorsService,
        private _mapError: MapErrorService
    ) {}

    //Declare vars to show info/loader/error
    showInfo: Boolean = false;
    loader = { show: true, position: 'absolute', align: 'top', mode: "indeterminate" }
    error = { show: false, msg: '' }

    //Declare var to data table
    authors: any[] = [];
    displayedColumns: string[] = ['image', 'name', 'specialty', 'actions'];
    dataSource: MatTableDataSource<any>;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    ngOnInit() {
        this.getAuthors()
    }

    getAuthors() {
        this._getAuthorsService.getAll()
            .map(resp => resp.json())
            .subscribe(
                data => {
                    console.log(data)
                    this.authors = data;
                    this.dataSource = new MatTableDataSource(data);
                    this.loader.show = false;
                    this.showInfo = true;

                    this.dataSource.sort = this.sort
                    setTimeout(() => {
                        this.dataSource.paginator = this.paginator
                    })
                },
                err => {
                    this.loader.show = false;
                    this.showInfo = false;
                    this.error.show = true;

                    if(err.json().status == 404) {
                    this.error.msg = 'No hay especialidades disponibles.';
                    } else {
                    this.error.msg = this._mapError.getMessage(err.json(), 'especialidades')
                    }
                }
            )
    }

    authorsFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
}