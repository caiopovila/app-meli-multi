import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiConfigService } from '../config/api-config.service';
import { EvidenceClaim, PostMessageClaim } from '../interfaces/interface_claim';


@Injectable({
  providedIn: 'root'
})
export class ClaimService extends ApiConfigService {

  searchClaim(clientId: number, param?: HttpParams): Observable<any> {
    return this.http.get(`${this.getUrlApi()}/claim/search/${clientId}`, {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization': `Basic ${this.getIdSession()}`
            }),
            withCredentials: true,
            observe: 'body',
            params: param,
            responseType: 'json'
          });
  }

  messagesClaim(clientId: number, claimId: string): Observable<any> {
    return this.http.get(`${this.getUrlApi()}/claim/messages/${clientId}/${claimId}`, {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization': `Basic ${this.getIdSession()}`
            }),
            withCredentials: true,
            observe: 'body',
            responseType: 'json'
          });
  }

  postMessagesClaim(clientId: number, claimId: string, body: PostMessageClaim): Observable<any> {
    return this.http.post(`${this.getUrlApi()}/claim/messages/${clientId}/${claimId}`, body, {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization': `Basic ${this.getIdSession()}`
            }),
            withCredentials: true,
            observe: 'body',
            responseType: 'json'
          });
  }

  postAttachmentsMessagesClaim(clientId: number, claimId: string, body: any): Observable<any> {
    return this.http.post(`${this.getUrlApi()}/claim/messages/attachments/${clientId}/${claimId}`, body, {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization': `Basic ${this.getIdSession()}`
            }),
            withCredentials: true,
            observe: 'body',
            responseType: 'json'
          });
  }

  getAttachmentMessagesClaim(clientId: number, claimId: string, attachId: any): Observable<any> {
    return this.http.get(`${this.getUrlApi()}/claim/messages/attachments/download/${clientId}/${claimId}/${attachId}`, {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization': `Basic ${this.getIdSession()}`
            }),
            withCredentials: true,
            observe: 'body',
            responseType: 'json'
          });
  }

  sendMediationClaim(clientId: number, claimId: string): Observable<any> {
    return this.http.put(`${this.getUrlApi()}/claim/mediation/${clientId}/${claimId}`, '', {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization': `Basic ${this.getIdSession()}`
            }),
            withCredentials: true,
            observe: 'body',
            responseType: 'json'
          });
  }

  expectedResolutionsClaim(clientId: number, claimId: string): Observable<any> {
    return this.http.get(`${this.getUrlApi()}/claim/resolutions/${clientId}/${claimId}`, {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization': `Basic ${this.getIdSession()}`
            }),
            withCredentials: true,
            observe: 'body',
            responseType: 'json'
          });
  }

  postExpectedResolutionsClaim(clientId: number, claimId: string, body: string): Observable<any> {
    return this.http.post(`${this.getUrlApi()}/claim/resolutions/${clientId}/${claimId}`, body, {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization': `Basic ${this.getIdSession()}`
            }),
            withCredentials: true,
            observe: 'body',
            responseType: 'json'
          });
  }

  acceptExpectedResolutionsClaim(clientId: number, claimId: string): Observable<any> {
    return this.http.put(`${this.getUrlApi()}/claim/resolutions/${clientId}/${claimId}`, '', {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization': `Basic ${this.getIdSession()}`
            }),
            withCredentials: true,
            observe: 'body',
            responseType: 'json'
          });
  }

  evidencesClaim(clientId: number, claimId: string): Observable<any> {
    return this.http.get(`${this.getUrlApi()}/claim/evidences/${clientId}/${claimId}`, {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization': `Basic ${this.getIdSession()}`
            }),
            withCredentials: true,
            observe: 'body',
            responseType: 'json'
          });
  }

  postEvidencesClaim(clientId: number, claimId: string, body: EvidenceClaim): Observable<any> {
    return this.http.post(`${this.getUrlApi()}/claim/evidences/${clientId}/${claimId}`, body, {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization': `Basic ${this.getIdSession()}`
            }),
            withCredentials: true,
            observe: 'body',
            responseType: 'json'
          });
  }

  getHistoryClaim(clientId: number, claimId: string): Observable<any> {
    return this.http.get(`${this.getUrlApi()}/claim/history/${clientId}/${claimId}`, {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization': `Basic ${this.getIdSession()}`
            }),
            withCredentials: true,
            observe: 'body',
            responseType: 'json'
          });
  }

  getDetailClaim(clientId: number, reasonId: string): Observable<any> {
    return this.http.get(`${this.getUrlApi()}/claim/detail/${clientId}/${reasonId}`, {
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
