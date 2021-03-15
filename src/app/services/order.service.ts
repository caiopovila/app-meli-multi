import { HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiConfigService } from '../config/api-config.service';
import { SearchOrder } from '../interfaces/interface_order';

@Injectable({
  providedIn: 'root'
})
export class OrderService extends ApiConfigService {

  orderList(client_id: number, param?: HttpParams): Observable<Object | SearchOrder> {
    return this.http.get(`${this.getUrlApi()}/orders/${client_id}`, {
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

  getBlOrdersClient(client_id: number): Observable<Object> {
    return this.http.get(`${this.getUrlApi()}/orders/blacklist/${client_id}`, {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization': 'Basic ' + this.getIdSession()
            }),
            withCredentials: true,
            observe: 'body',
            responseType: 'json'
          });
  }

  delOrdersBlUser(client_id: number, user_id: number): Observable<Object> {
    return this.http.delete(`${this.getUrlApi()}/orders/blacklist/${client_id}/${user_id}`, {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization': 'Basic ' + this.getIdSession()
            }),
            withCredentials: true,
            observe: 'body',
            responseType: 'json'
          });
  }

  addOrdersBlUser(client_id: number, user_id: number): Observable<Object> {
    return this.http.post(`${this.getUrlApi()}/orders/blacklist/${client_id}`, {user_id: user_id}, {
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
