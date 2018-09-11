import { Component, OnInit, Input } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { AuthService } from '../../services/auth/auth.service';
import { MapErrorService } from '../../services/error/map-error.service';

declare var jQuery: any;
declare var M: any;

@Component({
  selector: 'nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {

  //Declare variables
  user: any = { name: '', lastname: '' };
  loader = { show: true, position: 'absolute', align: 'top', mode: "indeterminate" }
  showMenu: Boolean = false;

  constructor(
    private _authService: AuthService,
    private _mapError: MapErrorService
  ) { }

  ngOnInit() {
    this.getUserInfo();
  }

  //Collapsible submenu
  subMenuInteraction(event: any, name: any) {

    let navMenu = document.getElementById('nav-menu');

    if(!navMenu.classList.contains('menu-hidden')) {

      jQuery('.submenu').each(function() {
        if(jQuery(this).is(':visible')) {
          jQuery(this).slideUp();
        }
  
        if(jQuery(this).data('menu') == name && jQuery(this).is(':hidden')) {
          jQuery(this).slideToggle();
          jQuery(this).toggleClass('active');
        }
      });
      
    }
  }

  //Get user info
  getUserInfo() {
    let id = localStorage.getItem('U53r');
    this._authService.getUserInfo(id)
      .map(resp => resp.json())
      .subscribe(
        data => {
          this.user = data;
          this.loader.show = false;
          this.showMenu = true;
        },
        err => {
          console.log(this._mapError.getMessage(err.json(), 'usuario'))
          this.loader.show = false;
          this.showMenu = true;
        }
      )
  }

  logout() {
    this._authService.logout();
  }

}
