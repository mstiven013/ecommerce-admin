import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth/auth.service';
import { MapErrorService } from '../../../services/error/map-error.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recover-password-page',
  templateUrl: './recover-password-page.component.html',
  styleUrls: ['../home-tmp/home-tmp.component.scss']
})
export class RecoverPasswordPageComponent implements OnInit {

  recoverform: FormGroup;
  error = { show: false, msg: '' }
  loader = { show: false, position: 'absolute', align: 'top', mode: "indeterminate" }
  showForm: Boolean = true;

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
    this.recoverform = new FormGroup({
      'email': new FormControl(null, [ Validators.required, Validators.email ])
    });
    
  }

  sendEmail(frm) {
    this.loader.show = true;
    console.log(frm.value)
    this.loader.show = false;
  }

}
