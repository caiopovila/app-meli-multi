import { HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiConfigService } from '../config/api-config.service';
import { DataClient } from '../interfaces/interface_client';

@Injectable({
  providedIn: 'root'
})
export class SellersService extends ApiConfigService {

  infoSeller(sellerId: number, param?: HttpParams): Observable<Object | DataClient> {
    return this.http.get(`${this.getUrlApi()}/sellers/${sellerId}`, {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization': 'Basic ' + this.getIdSession()
            }),
            withCredentials: true,
            observe: 'body', 
            params: param,
            responseType: 'json'
          });
  }
}
