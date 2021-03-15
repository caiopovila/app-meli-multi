import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiConfigService } from '../config/api-config.service';
import { Category } from '../interfaces/interface_categories';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService extends ApiConfigService {

  getCategories(): Observable<Object | Array<Category>> {
    return this.http.get(`${this.getUrlApi()}/items/info/categories`, {
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
