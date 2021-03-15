import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiConfigService } from '../config/api-config.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends ApiConfigService {

  authUser(authInfo: string): Observable<Object> {
    return this.http.post(`${this.getUrlApi()}/auth`, '', {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization': `basic ${authInfo}`
            }),
            withCredentials: true,
            observe: 'body', 
            responseType: 'json'
          });
  }

  exitUser(): Observable<Object> {
    return this.http.post(`${this.getUrlApi()}/auth/exit`, '', {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization': `bearer ${this.getIdSession()}`
            }),
            withCredentials: true,
            observe: 'body', 
            responseType: 'json'
          });
  }

}
