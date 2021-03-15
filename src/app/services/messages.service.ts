import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiConfigService } from '../config/api-config.service';
import { MessagePacks } from '../interfaces/interface_message';

@Injectable({
  providedIn: 'root'
})
export class MessagesService extends ApiConfigService {
  getMessages(order: any, param?: HttpParams): Observable<Object | MessagePacks> {
    return this.http.get(`${this.getUrlApi()}/msg/${order.pack_id}/${order.seller.id}/${order.buyer.id}`, {
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

  getAttachments(msg: any): Observable<Object> {
    return this.http.get(`${this.getUrlApi()}/msg/attachments/${msg.message_attachments.filename}/${msg.id}`, {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization': 'Basic ' + this.getIdSession()
            }),
            withCredentials: true,
            observe: 'body',
            responseType: 'json'
          });
  }

  postMessage(body: any): Observable<Object> {
    return this.http.post(`${this.getUrlApi()}/msg`, body, {
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
