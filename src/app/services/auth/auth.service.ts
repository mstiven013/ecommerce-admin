import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { config } from '../../../config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private _http: Http,
    private _router: Router
  ) { }

  login(username, password) {
    let params = new URLSearchParams();
    params.append('username',username);
    params.append('password',password);
    params.append('grant_type','password');
    params.append('client_id',config.client_id);

    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8', 'Authorization': 'Basic '+btoa(`${config.client_id}:${config.secret}`)});
    let options = new RequestOptions({headers: headers});

    return this._http.post(config.API_URL + '/login', params.toString(), options);
  }

  logout() {
    localStorage.removeItem('4ccT0k3n');
    localStorage.removeItem('U53r');

    this._router.navigate(['/']);
  }

  isUserLoggedIn() {
    let token = localStorage.getItem('4ccT0k3n');
    let user = localStorage.getItem('U53r');

    if(token === undefined || user === undefined || token === null || user === null) {
      this._router.navigate(['/']);
    } else {
      return true;
    }
  }

  getUserInfo(id) {

    let token = localStorage.getItem('4ccT0k3n');

    let headers = new Headers({'Content-type': 'application/json', 'Authorization': 'Bearer '+ token });
    let options = new RequestOptions({ headers: headers });

    return this._http.get(config.API_URL + '/users/' + id, options);

  }
}
