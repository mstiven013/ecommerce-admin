import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, Sort } from '@angular/material';
import { GetUsersService } from '../../../../services/users/users.service';
import { MapErrorService } from '../../../../services/error/map-error.service';

@Component({
  selector: 'app-all-users-page',
  templateUrl: './all-users-page.component.html',
  styleUrls: ['../../account-tmp/account-tmp.component.scss']
})
export class AllUsersPageComponent {

  //Declare vars
  showInfo: Boolean = false;
  loader = { show: true, position: 'absolute', align: 'top', mode: "indeterminate" }
  error = { show: false, msg: '' }

  //declare Data table vars
  users: any[] = [];
  displayedColumns: string[] = ['image', 'name', 'email', 'country', 'role', 'actions'];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    protected _getUsersService: GetUsersService,
    protected _mapError: MapErrorService
  ) {}

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this._getUsersService.getAll()
    .map(resp => resp.json())
    .subscribe(
      data => {
        this.users = data;
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
        console.log(err)

        if(err.json().status == 404) {
          this.error.msg = 'No hay especialidades disponibles.';
        } else {
          this.error.msg = this._mapError.getMessage(err.json(), 'especialidades')
        }
      }
    )
  }

  //Input filter data table function
  authorsFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}