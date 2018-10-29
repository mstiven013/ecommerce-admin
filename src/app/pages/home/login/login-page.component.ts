import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth/auth.service';
import { MapErrorService } from '../../../services/error/map-error.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['../home-tmp/home-tmp.component.scss']
})
export class LoginPageComponent implements OnInit {

  loginform: FormGroup;
  error = { show: false, msg: '' }
  loader = { show: false, position: 'absolute', align: 'top', mode: "indeterminate" }

  constructor(
    private _authService: AuthService,
    private _mapError: MapErrorService,
    private _router: Router
  ) { }

  ngOnInit() { 

    //Redirect to account page if user is logged
    if( localStorage.getItem('U53r') !== null && localStorage.getItem('4ccT0k3n') !== null) {
      this._router.navigate(['/am-admin/account']);
    }

    //Generate form
    this.loginform = new FormGroup({
      'user': new FormControl(null, [
        Validators.required
      ]),
      'password': new FormControl(null, [
        Validators.required
      ])
    });

  }

  //Login function
  login(frm) {

    this.loader.show = true;

    this._authService.login(frm.value.user, frm.value.password)
      .map(resp => resp.json())
      .subscribe(
        data => {

          if(data.user.role[0] != 'CLIENT') {
            localStorage.setItem('4ccT0k3n', data.access_token)
            localStorage.setItem('U53r', data.user._id)

            this._router.navigate(['account']);
          } else {
            this.error.show = true;
            this.error.msg = 'No tienes acceso al panel de administración'
          }

          this.loader.show = false;
          
        },
        err => {
          this.error.show = true;
          this.error.msg = this._mapError.getMessage(err.json(), 'usuario')
          this.loader.show = false;
        }
      )
  }

}
