import { Component, Input, OnInit } from '@angular/core';
import { Client } from 'src/app/interfaces/interface_client';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-bl-add-order-dialog',
  templateUrl: './bl-add-dialog.component.html',
  styleUrls: ['./bl-add-dialog.component.css']
})
export class BlAddOrderDialogComponent implements OnInit {

  clientsSelected!: Array<number>;
  @Input() listClients!: Array<Client>;
  
  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit(): void {
  }

  addBl(userId: any) {
    if(this.clientsSelected) {
      let nInterval = 0;
  
      this.clientsSelected.forEach((client: any) => {
        setTimeout(() => {
          this.orderService.addOrdersBlUser(client, userId)
          .subscribe((conf: any) => {
            this.orderService.openSnackBar(`Bloqueio em ${'user_blocked' in conf ? conf.user_blocked : 'nenhum'}`);
          })
        }, nInterval)
        nInterval = nInterval + 500;
      });
      setTimeout(() => {
        this.ngOnInit()
      }, nInterval);
    } else
      this.orderService.openSnackBar(`Selecione o(s) cliente(s)`, 'Erro');
  }
}
