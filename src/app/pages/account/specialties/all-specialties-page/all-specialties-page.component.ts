import { Component, OnInit } from '@angular/core';
import { GetSpecialtiesService } from '../../../../services/specialties/specialties.service';
import { MapErrorService } from '../../../../services/error/map-error.service';

@Component({
  selector: 'app-all-specialties-page',
  templateUrl: './all-specialties-page.component.html',
  styleUrls: ['../../account-tmp/account-tmp.component.scss']
})
export class AllSpecialtiesPageComponent implements OnInit {

  specialties: any = [];
  showInfo: Boolean = false;
  loader = { show: true, position: 'absolute', align: 'top', mode: "indeterminate" }
  error = { show: false, msg: '' }

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
          this.loader.show = false;
          this.showInfo = true;
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

}