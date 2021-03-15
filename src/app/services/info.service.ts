import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiConfigService } from '../config/api-config.service';
import { Sites } from '../interfaces/interface_sites';
import { User } from '../interfaces/interface_user';
import { ValidationOk } from '../interfaces/interface_validation';

@Injectable({
  providedIn: 'root'
})
export class InfoService extends ApiConfigService {

  getUser(): Observable<any> {
    return this.http.get(`${this.getUrlApi()}/adm/user`, {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization': 'Basic ' + this.getIdSession()
            }),
            withCredentials: true,
            observe: 'body',
            responseType: 'json'
          });
  }

  getNotifications(): Observable<Object> {
    return this.http.get(`${this.getUrlApi()}/notification`, {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization': 'Basic ' + this.getIdSession()
            }),
            withCredentials: true,
            observe: 'body',
            responseType: 'json'
          });
  }

  listSites(): Observable<Object | any> {
    return this.http.get(`${this.getUrlApi()}/adm/site`, {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization': 'Basic ' + this.getIdSession()
            }),
            withCredentials: true,
            observe: 'body',
            responseType: 'json'
          });
  }

  postSiteId(id: string): Observable<Object | any> {
    return this.http.post(`${this.getUrlApi()}/adm/site`, {siteId: id}, {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization': 'Basic ' + this.getIdSession()
            }),
            withCredentials: true,
            observe: 'body',
            responseType: 'json'
          });
  }

  putUser(userData: any): Observable<Object> {
    return this.http.put(`${this.getUrlApi()}/adm`, userData, {
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
