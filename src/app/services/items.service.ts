import { HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiConfigService } from '../config/api-config.service';
import { BodyItem } from '../interfaces/body-item';
import { DomainDiscovery } from '../interfaces/interface_categories';
import { Currencies } from '../interfaces/interface_currencies';
import { Item, RetItem, ReviewsItem } from '../interfaces/interface_item';
import { ListingType } from '../interfaces/interface_listingType';


@Injectable({
  providedIn: 'root'
})
export class ItemsService extends ApiConfigService {

  search(q: string, param?: HttpParams, client?: number): Observable<any> {
    return this.http.post(`${this.getUrlApi()}/items/search${client ? '/'+client : ''}`, { q: q }, {
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

  get_reviews_item(itemId: string, param?: HttpParams): Observable<ReviewsItem | any> {
    return this.http.get(`https://api.mercadolibre.com/reviews/item/${itemId}`, {
            headers: new HttpHeaders({
              'Content-Type':  'application/json'
            }),
            observe: 'body', 
            params: param,
            responseType: 'json'
          });
  }

  get_item(itemId: string): Observable<RetItem | any> {
    return this.http.get(`${this.getUrlApi()}/items/${itemId}`, {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization': 'Basic ' + this.getIdSession()
            }),
            withCredentials: true,
            observe: 'body', 
            responseType: 'json'
          });
  }

  domain_discovery(title: string): Observable<any | Array<DomainDiscovery>> {
    return this.http.get(`${this.getUrlApi()}/items/info/category/discovery`, {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization': 'Basic ' + this.getIdSession()
            }),
            withCredentials: true,
            observe: 'body', 
            params: new HttpParams().set('q', title),
            responseType: 'json'
          });
  }

  get_listing_types(): Observable<Object | Array<ListingType>> {
    return this.http.get(`${this.getUrlApi()}/items/info/listing_type`, {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization': 'Basic ' + this.getIdSession()
            }),
            withCredentials: true,
            observe: 'body', 
            responseType: 'json'
          });
  }

  get_currencies(): Observable<Object | Array<Currencies>> {
    return this.http.get(`${this.getUrlApi()}/items/info/currencies`, {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization': 'Basic ' + this.getIdSession()
            }),
            withCredentials: true,
            observe: 'body', 
            responseType: 'json'
          });
  }

  postItem(itemBody: BodyItem): Observable<Object | Item> {
    return this.http.post(`${this.getUrlApi()}/items`, itemBody, {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization': 'Basic ' + this.getIdSession()
            }),
            withCredentials: true,
            observe: 'body', 
            responseType: 'json'
          });
  }

  deleteItem(clientId: number, itemId: string): Observable<Object | Item> {
    return this.http.delete(`${this.getUrlApi()}/items/${clientId}/${itemId}`, {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization': 'Basic ' + this.getIdSession()
            }),
            withCredentials: true,
            observe: 'body', 
            responseType: 'json'
          });
  }

  postImg(file: File): Observable<Object> {
    return this.http.post(`${this.getUrlApi()}/items/img`, file, {
            headers: new HttpHeaders({
              'Content-Type':  file.type,
              'Authorization': 'Basic ' + this.getIdSession()
            }),
            withCredentials: true,
            observe: 'body', 
            responseType: 'json'
          });
  }

  putItem(itemBody: BodyItem): Observable<Object> {
    return this.http.put(`${this.getUrlApi()}/items/${itemBody.item ? itemBody.item.id : 0}`, itemBody, {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization': 'Basic ' + this.getIdSession()
            }),
            withCredentials: true,
            observe: 'body', 
            responseType: 'json'
          });
  }
/* 
  cloneItem(itemBody: BodyItem): Observable<Object> {
    return this.http.post(`${this.getUrlApi()}/items/clone`, itemBody, {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization': 'Basic ' + this.getIdSession()
            }),
            withCredentials: true,
            observe: 'body', 
            responseType: 'json'
          });
  } */
}
