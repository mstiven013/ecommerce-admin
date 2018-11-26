import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { config } from '../../../config';

@Injectable({
  providedIn: 'root'
})
export class GetBooksService {

  constructor(
    private _http: Http
  ) { }

  getAllBooks() {
    let token = localStorage.getItem('4ccT0k3n');

    let headers = new Headers({'Content-type': 'application/json', 'Authorization': 'Bearer '+ token });
    let options = new RequestOptions({ headers: headers });

    return this._http.get(config.API_URL + '/books?limit=100', options);
  }

  getBooksById(id) {
    let token = localStorage.getItem('4ccT0k3n');

    let headers = new Headers({'Content-type': 'application/json', 'Authorization': 'Bearer '+ token });
    let options = new RequestOptions({ headers: headers });

    return this._http.get(config.API_URL + '/books/' + id, options);
  }

  getBooksBySlug(slug) {
    let token = localStorage.getItem('4ccT0k3n');

    let headers = new Headers({'Content-type': 'application/json', 'Authorization': 'Bearer '+ token });
    let options = new RequestOptions({ headers: headers });

    return this._http.get(config.API_URL + '/books/slug/' + slug, options);
  }

  getBooksBySpecialty(specialty) {
    let token = localStorage.getItem('4ccT0k3n');

    let headers = new Headers({'Content-type': 'application/json', 'Authorization': 'Bearer '+ token });
    let options = new RequestOptions({ headers: headers });

    return this._http.get(config.API_URL + '/books/' + specialty + '/books', options);
  }

  getBooksByAuthor(author) {
    let token = localStorage.getItem('4ccT0k3n');

    let headers = new Headers({'Content-type': 'application/json', 'Authorization': 'Bearer '+ token });
    let options = new RequestOptions({ headers: headers });

    return this._http.get(config.API_URL + '/authors/' + author + '/books', options);
  }

}

@Injectable({
  providedIn: 'root'
})
export class CreateBooksService {
  constructor() { }
}

@Injectable({
  providedIn: 'root'
})
export class DeleteBooksService {
  constructor() { }
}

@Injectable({
  providedIn: 'root'
})
export class UpdateBooksService {
  constructor(
    private _http: Http
  ) { }

  update(update, id) {

    let token = localStorage.getItem('4ccT0k3n');

    let headers = new Headers({'Content-type': 'application/json', 'Authorization': 'Bearer '+ token });
    let options = new RequestOptions({ headers: headers });

    return this._http.put(config.API_URL + '/books/' + id, update, options);

  }
}
