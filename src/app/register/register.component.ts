import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../login/login.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private registerService: RegisterService
  ) { }

  ngOnInit(): void {
  }
  
  register(bodyPost: NgForm) {
    if (bodyPost.valid) {
      if (bodyPost.value.password === bodyPost.value.password_conf) {
        this.registerService.postRegister(bodyPost.value).subscribe((returnSubmited: any) => {
          if (returnSubmited && returnSubmited.S)
            setTimeout(() => {
              this.ngOnInit();
            }, 4000)
          
          this.registerService.openSnackBar('Envio: ', returnSubmited && returnSubmited.S ? returnSubmited.S : returnSubmited.E ? returnSubmited.E : 'Erro');
        });
      } else
        this.registerService.openSnackBar('Senha incompatível!', 'Erro');

    } else {
      this.registerService.openSnackBar('Digite os valores corretamente!', 'Erro');
    }
  }
}
