import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiConfigService } from '../config/api-config.service';
import { ValidationOk } from '../interfaces/interface_validation';

@Injectable({
  providedIn: 'root'
})
export class RegisterService extends ApiConfigService {

  postRegister(body: any): Observable<Object | ValidationOk> {
    return this.http.post(`${this.getUrlApi()}/adm`, body, {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization': 'Basic ' + this.getIdSession()
            }),
            withCredentials: true,
            observe: 'body',
            responseType: 'json'
          });
  }
}
