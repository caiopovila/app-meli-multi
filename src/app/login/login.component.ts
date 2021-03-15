import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoaderService } from '../config/loader.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loading: boolean = false;

  constructor(
    private login: LoginService,
    private loaderService: LoaderService
  ) { 
    this.loaderService.isLoading.subscribe((v) => {
      if (this.loading)
        setTimeout(() => {
          this.loading = v;
        }, 1000)
      else
        this.loading = v;
    });
  }

  logger(dadoLogin: NgForm) {
    if (dadoLogin.valid) {
      const infoLogin = btoa(dadoLogin.value.name + ':' + dadoLogin.value.pass);
      this.login.authUser(infoLogin).subscribe((returnSubmited: any) => {
        if ('id' in returnSubmited) {
          sessionStorage.setItem('idSession', returnSubmited.id);
          setTimeout(() => {
            this.login.route.navigate(['./home']);
          }, 1000);
        }
      });
    } else {
      this.login.openSnackBar('Digite os valores corretamente!', 'Erro');
    }
  }
}
