import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { MapErrorService } from '../../services/error/map-error.service';
import {MatMenuModule} from '@angular/material/menu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  //Declare vars
  user: any = { name: '', lastname: '' };

  constructor(
      private _authService: AuthService,
      private _mapError: MapErrorService
  ) { }

  ngOnInit() {
    this.getUserInfo()
  }

  getUserInfo() {
    let id = localStorage.getItem('U53r');
    this._authService.getUserInfo(id)
      .map(resp => resp.json())
      .subscribe(
        data => {
          this.user = data;
        },
        err => {
          this._mapError.getMessage(err.json(), 'usuario')
        }
      )
  }

  hiddeMenu() {

    let myclass = 'menu-hidden';

    let btn = document.getElementById('hide-menu-btn');
    let main = document.getElementById('account-main');
    let menu = document.getElementById('nav-menu');
    let header = document.getElementById('header');

    btn.classList.toggle(myclass)
    main.classList.toggle(myclass)
    menu.classList.toggle(myclass)
    header.classList.toggle(myclass)
  }

  logout() {
      this._authService.logout();
  }

}
