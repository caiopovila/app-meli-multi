import { Component, Input, OnInit } from '@angular/core';
import { Client } from 'src/app/interfaces/interface_client';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-bl-rm-order-dialog',
  templateUrl: './bl-rm-dialog.component.html',
  styleUrls: ['./bl-rm-dialog.component.css']
})
export class BlRmOrderDialogComponent implements OnInit {

  clientsSelected!: Array<number>;
  @Input() listClients!: Array<Client>;
  
  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit(): void {
  }

  rmBl(userId: any) {
    if(this.clientsSelected) {
      let nInterval = 0;
  
      this.clientsSelected.forEach((client) => {
        setTimeout(() => {
          this.orderService.delOrdersBlUser(client, userId)
          .subscribe((conf: any) => {
            this.orderService.openSnackBar('message' in conf ? conf.message : 'Erro');
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
