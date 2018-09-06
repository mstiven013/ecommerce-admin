import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  loginform: FormGroup;

  constructor() { }

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
    console.log(frm.value)
  }

}
