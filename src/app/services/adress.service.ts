import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiConfigService } from '../config/api-config.service';
import { CoverageArea } from '../interfaces/interface_area';

@Injectable({
  providedIn: 'root'
})
export class AdressService extends ApiConfigService {
  
  getStates(): Observable<Object | Array<CoverageArea>> {
    return this.http.get(`${this.getUrlApi()}/items/info/areas`, {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization': `Basic ${this.getIdSession()}`
            }),
            withCredentials: true,
            observe: 'body',
            responseType: 'json'
          });
  }
}
