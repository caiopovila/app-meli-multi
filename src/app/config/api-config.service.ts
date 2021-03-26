import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class ApiConfigService {

  constructor(
    public http: HttpClient,
    public route: Router,
    private messageBar: MatSnackBar,
    private dialog: MatDialog
    ) { }

  getUrlApi(): string {
    if (environment.production)
      return "https://multicontasmeli.com.br/API";
    else
      return "http://localhost:3000/API";
  }

  getIdSession(): string {
    return sessionStorage.getItem('idSession') || "null";
  }

  errorTreatment(error: any) {
    if ('status' in error)
      switch (error.status) {
        case 403:
          sessionStorage.clear();
          this.dialog.closeAll();
          this.route.navigate(['./']);
          break;
        case 401:
          this.openSnackBar('error' in error && 'E' in error.error ? error.error.E : 'Ops!', 'Não autorizado');
          break;
        case 500:
          if('error' in error && 'user' in error.error && 'response' in error.error && 'error' in error.error.response)
            alert(`${error.error.user}: ${error.error.response.cause && error.error.response.cause[0] && error.error.response.cause[0].message ? error.error.response.cause[0].message : error.error.response.cause[0] ? error.error.response.cause[0] : error.error.response.error}`);
          if ('error' in error && 'E' in error.error)
            this.openSnackBar(error.error.E, 'Erro');
          if ('error' in error && 'message' in error.error)
            this.openSnackBar(error.error.message, 'Erro');
          break;
        case 420:
          window.location.href = 'error' in error && 'link' in error.error ? error.error.link : '';
          break;
        default:
          break;
      }
  }

  openSnackBar(message: string, action?: string) {
    this.messageBar.open(message, action || undefined, {
      duration: 4000
    });
  }
}
