import { Component, OnInit } from '@angular/core';
import { Client, DataClient } from 'src/app/interfaces/interface_client';
import { User } from 'src/app/interfaces/interface_user';
import { ValidationOk } from 'src/app/interfaces/interface_validation';
import { ClientsService } from 'src/app/services/clients.service';
import { InfoService } from 'src/app/services/info.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {
  user!: User;
  passConf: string = '';
  clientList: Array<Client> = [];
  clientSelected: number = 0;
  clientData!: DataClient;

  constructor(
    private userData: InfoService,
    private clientService: ClientsService
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.userData.getUser().subscribe((retUserData: User) => {
        this.user = retUserData;
      })
      this.clientService.listClients().subscribe((retListClients: Array<Client>) => {
        this.clientList = retListClients;
      })
    })
  }

  saveData(): void {
    if (!this.user || !this.user.password) {
      this.userData.putUser(this.user).subscribe((ret: ValidationOk) => {
        this.userData.openSnackBar('Envido dos dados', ret.S || 'Erro');
      })
    } else
    if (this.user.password === this.passConf) {
      this.userData.putUser(this.user).subscribe((ret: ValidationOk) => {
        this.userData.openSnackBar('Envido dos dados', ret.S || 'Erro');
      })
    } else
      this.userData.openSnackBar('Senha incompatível', 'Erro');
    
    this.user.password = '';
    this.passConf = '';
  }

  getDataClient() {
    if (this.clientSelected) {
      this.clientService.getClient(this.clientSelected)
      .subscribe((retDataClient: DataClient) => {
        this.clientData = retDataClient;
      })
    } else
      this.clientService.openSnackBar('Selecione o cliente', 'Erro');
  }

  saveDataClient() {
    let client: any = {};

    client.phone = { 
      number: this.clientData ? this.clientData.phone.number : '',
      area_code: this.clientData ? this.clientData.phone.area_code : ''
    };

    this.clientService.putClient(this.clientData ? this.clientData.id : 0, client)
    .subscribe((retPutData: any) => {
      if (retPutData && retPutData.user_id)
        this.clientService.openSnackBar('Enviado');
    })
  }

  goLink() {
    window.location.href = this.clientService.getUrlApi() + '/client/link'
  }
}
