import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GetSpecialtiesService } from '../../../../services/specialties/specialties.service';

@Component({
  selector: 'app-single-specialty-page',
  templateUrl: './single-specialty-page.component.html',
  styleUrls: ['../../account-tmp/account-tmp.component.scss']
})
export class SingleSpecialtyPageComponent {

  //declare vars
  private sub: any;
  showInfo: Boolean = false;
  loader = { show: true, position: 'absolute', align: 'top', mode: "indeterminate" }
  error = { show: false, msg: '' }
  specialty = { title: null, slug: null, description: null, registerDate: null }

  constructor(
    //Specialties
    private _getSpecialtieService: GetSpecialtiesService,

    //Router services
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {

    this.sub = this._activatedRoute.params.subscribe(params => {
      if(params['id'] !== undefined) {
        this.getSpecialtyInfo(params['id'])
      } else {
        this.loader.show = false;
        this.showInfo = true;
      }
    })

  }

  getSpecialtyInfo(id) {
    this._getSpecialtieService.getById(id)
      .map(resp => resp.json())
      .subscribe(
        data => {
          console.log(data)
          this.specialty = data;
          this.loader.show = false;
          this.showInfo = true;
        },
        err => {
          console.log(err.json())
          this.loader.show = false;
          this.showInfo = true;
        }
      )
  }

}