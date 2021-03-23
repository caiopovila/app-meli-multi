import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoaderService } from '../config/loader.service';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../login/login.component.css']
})
export class RegisterComponent implements OnInit {

  loading: boolean = false;

  constructor(
    private registerService: RegisterService,
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

  ngOnInit(): void {
  }
  
  register(bodyPost: NgForm) {
    if (bodyPost.valid) {
      if (bodyPost.value.password === bodyPost.value.password_conf) {
        this.registerService.postRegister(bodyPost.value).subscribe((returnSubmited: any) => {
          if ('S' in returnSubmited)
            bodyPost.resetForm();
          
          this.registerService.openSnackBar('Envio: ', 'S' in returnSubmited ? returnSubmited.S : 'E' in returnSubmited ? returnSubmited.E : 'Erro');
        });
      } else
        this.registerService.openSnackBar('Senha incompatível!', 'Erro');

    } else {
      this.registerService.openSnackBar('Digite os valores corretamente!', 'Erro');
    }
  }
}
