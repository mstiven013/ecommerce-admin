import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { MapErrorService } from '../../services/error/map-error.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  loginform: FormGroup;
  error = { show: false, msg: '' }

  constructor(
    private _authService: AuthService,
    private _mapError: MapErrorService,
    private _router: Router
  ) { }

  ngOnInit() {

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
    this._authService.login(frm.value.user, frm.value.password)
      .map(resp => resp.json())
      .subscribe(
        data => {
          localStorage.setItem('4ccT0k3n', data.access_token)
          localStorage.setItem('U53r', data.user._id)

          this._router.navigate(['/dashboard']);
        },
        err => {
          this.error.show = true;
          this.error.msg = this._mapError.getMessage(err.json(), 'usuario')
        }
      )
  }

}
