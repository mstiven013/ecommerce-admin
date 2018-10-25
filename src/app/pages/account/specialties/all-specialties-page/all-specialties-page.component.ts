import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, Sort } from '@angular/material';
import { GetSpecialtiesService } from '../../../../services/specialties/specialties.service';
import { MapErrorService } from '../../../../services/error/map-error.service';

@Component({
  selector: 'app-all-specialties-page',
  templateUrl: './all-specialties-page.component.html',
  styleUrls: ['../../account-tmp/account-tmp.component.scss']
})
export class AllSpecialtiesPageComponent implements OnInit {

  showInfo: Boolean = false;
  loader = { show: true, position: 'absolute', align: 'top', mode: "indeterminate" }
  error = { show: false, msg: '' }

  specialties: any[] = [];
  displayedColumns: string[] = ['image', 'title', 'slug', 'parent', 'description', 'actions'];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private _getSpecialtiesService: GetSpecialtiesService,
    private _mapError: MapErrorService
  ) { }

  ngOnInit() {
    this.getSpecialties();
  }

  getSpecialties() {
    this._getSpecialtiesService.getAll()
      .map(resp => resp.json())
      .subscribe(
        data => {
          this.specialties = data;
          this.dataSource = new MatTableDataSource(data);
          this.loader.show = false;
          this.showInfo = true;
          console.log(data)
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

  specialtiesFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}