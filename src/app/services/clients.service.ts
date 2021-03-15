import { HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiConfigService } from '../config/api-config.service';
import { Balance } from '../interfaces/interface_balance';
import { Client, DataClient } from '../interfaces/interface_client';
import { ListNotices } from '../interfaces/interface_notices';
import { TotalQuestions } from '../interfaces/interface_questions';
import { TotalVisits } from '../interfaces/interface_visits';

@Injectable({
  providedIn: 'root'
})
export class ClientsService extends ApiConfigService {
 
  listClients(): Observable<any> {
    return this.http.get(`${this.getUrlApi()}/client`, {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization': 'Basic ' + this.getIdSession()
            }),
            withCredentials: true,
            observe: 'body',
            responseType: 'json'
          });
  } 

  getNotices(client_id: number, param?: HttpParams): Observable<Object | ListNotices> {
    return this.http.get(`${this.getUrlApi()}/client/notices/${client_id}`, {
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

  getTotalVisits(client_id: number, param?: HttpParams): Observable<Object | TotalVisits> {
    return this.http.get(`${this.getUrlApi()}/client/visits/${client_id}`, {
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

  getClient(client_id: number, param?: HttpParams): Observable<Object | any> {
    return this.http.get(`${this.getUrlApi()}/client/${client_id}`, {
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

  getBalanceClient(client_id: number): Observable<Object | Balance> {
    return this.http.get(`${this.getUrlApi()}/client/balance/${client_id}`, {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization': 'Basic ' + this.getIdSession()
            }),
            withCredentials: true,
            observe: 'body',
            responseType: 'json'
          });
  }

  getTotalQuestions(client_id: number, param?: HttpParams): Observable<Object | TotalQuestions> {
    return this.http.get(`${this.getUrlApi()}/client/questions/${client_id}`, {
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

  putClient(id: number, dataClient: any): Observable<Object> {
    return this.http.put(`${this.getUrlApi()}/client/${id}`, dataClient, {
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
