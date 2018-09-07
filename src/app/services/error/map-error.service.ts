import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapErrorService {

  constructor() { }

  getMessage(err, src) {

    let msg = '';

    switch (err.status) {
      case 404:
          msg = `Este ${src} no existe`;
        break;

      case 403:
          if(src == 'usuario') {
            msg = `El usuario y la contraseña no coinciden`
          } else {
            msg = `No tienes acceso a esta información`
          }
        break;
    
      default:
          msg = `Ha ocurrido un problema. Si este problema persiste por favor escribanos a diseno@webussines.com`;
        break;
    }

    return msg;
  }
}
