import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { config } from '../../../config';

@Injectable({
  providedIn: 'root'
})
export class GetUsersService {

  constructor(
    private _http: Http
  ) { }

  getAll() {
    let token = localStorage.getItem('4ccT0k3n');

    let headers = new Headers({'Content-type': 'application/json', 'Authorization': 'Bearer '+ token });
    let options = new RequestOptions({ headers: headers });

    return this._http.get(config.API_URL + '/users', options);
  }

  getById(id) {
    let token = localStorage.getItem('4ccT0k3n');

    let headers = new Headers({'Content-type': 'application/json', 'Authorization': 'Bearer '+ token });
    let options = new RequestOptions({ headers: headers });

    return this._http.get(config.API_URL + '/users/' + id, options);
  }
}

export class CreateUsersService {
  constructor() {}
}

export class DeleteUsersService {
  constructor() {}
}

export class UpdateUsersService {
  constructor() {}
}