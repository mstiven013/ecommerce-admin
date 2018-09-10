import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { MapErrorService } from '../../../services/error/map-error.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-me-page',
  templateUrl: './me-page.component.html',
  styleUrls: ['../account-tmp/account-tmp.component.scss']
})
export class MePageComponent implements OnInit {

  //Declare variables
  user: any = { name: null, lastname: null, email: null, country: null, phone: null, mobile: null };
  loader = { show: true, position: 'absolute', align: 'top', mode: "indeterminate" }
  userform: FormGroup;
  showForm = false;

  constructor(
    private _authService: AuthService,
    private _mapError: MapErrorService
  ) { }

  ngOnInit() {
    this.getUserInfo();
  }

  //Get user info function
  getUserInfo() {
    let id = localStorage.getItem('U53r');
    this._authService.getUserInfo(id)
      .map(resp => resp.json())
      .subscribe(
        data => {
          this.user = data;
          this.generateUserForm();
          this.loader.show = false;
        },
        err => {
          this._mapError.getMessage(err.json(), 'usuario')
          this.loader.show = false;
        }
      )
  }

  //Generate form function
  generateUserForm() {
    this.userform = new FormGroup({
      'name': new FormControl(this.user.name, [Validators.required]),
      'lastname': new FormControl(this.user.lastname, []),
      'email': new FormControl(this.user.email, [Validators.required, Validators.email]),
      'country': new FormControl(this.user.country, [Validators.required]),
      'phone': new FormControl(this.user.phone, []),
      'mobile': new FormControl(this.user.mobile, []),
    });
    this.showForm = true;
  }

  //update user info function
  updateUserInfo(frm) {

    let me = this;
    this.loader.show = true;
    console.log(frm.value)

    setTimeout(function() {
      me.loader.show = false;
    }, 1500);
  }

}
