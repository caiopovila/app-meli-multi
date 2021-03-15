import { HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiConfigService } from '../config/api-config.service';
import { Question, SearchQuestions } from '../interfaces/interface_questions';


@Injectable({
  providedIn: 'root'
})
export class QuestionsService extends ApiConfigService {

  questionsList(client_id: number, param?: HttpParams): Observable<Object | SearchQuestions> {
    return this.http.get(`${this.getUrlApi()}/questions/${client_id}`, {
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

  deleteQuestion(client_id: number, question_id: number): Observable<Object | Array<string>> {
    return this.http.delete(`${this.getUrlApi()}/questions/${client_id}/${question_id}`, {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization': 'Basic ' + this.getIdSession()
            }),
            withCredentials: true,
            observe: 'body', 
            responseType: 'json'
          });
  }

  answerQuestion(text: string, client_id: number, question_id: number): Observable<Object | Question> {
    return this.http.post(`${this.getUrlApi()}/questions/answer/${client_id}/${question_id}`, { text: text }, {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization': 'Basic ' + this.getIdSession()
            }),
            withCredentials: true,
            observe: 'body', 
            responseType: 'json'
          });
  }

  getBlQuestionsClient(client_id: number): Observable<Object> {
    return this.http.get(`${this.getUrlApi()}/questions/blacklist/${client_id}`, {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization': 'Basic ' + this.getIdSession()
            }),
            withCredentials: true,
            observe: 'body',
            responseType: 'json'
          });
  }

  delQuestionsBlUser(client_id: number, user_id: number): Observable<Object> {
    return this.http.delete(`${this.getUrlApi()}/questions/blacklist/${client_id}/${user_id}`, {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization': 'Basic ' + this.getIdSession()
            }),
            withCredentials: true,
            observe: 'body',
            responseType: 'json'
          });
  }

  addQuestionsBlUser(client_id: number, user_id: number): Observable<Object> {
    return this.http.post(`${this.getUrlApi()}/questions/blacklist/${client_id}`, {user_id: user_id}, {
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
