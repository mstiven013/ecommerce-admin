import { Component, OnInit, Input } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
      private _authService: AuthService
  ) { }

  ngOnInit() {
  }

  logout() {
      this._authService.logout();
  }

}
