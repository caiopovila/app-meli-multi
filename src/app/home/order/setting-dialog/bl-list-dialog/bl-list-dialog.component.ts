import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/home/question/confirm-dialog/confirm-dialog.component';
import { Client } from 'src/app/interfaces/interface_client';
import { BlackListOrder } from 'src/app/interfaces/interface_order';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-bl-list-order-dialog',
  templateUrl: './bl-list-dialog.component.html',
  styleUrls: ['./bl-list-dialog.component.css']
})
export class BlListOrderDialogComponent implements OnInit {

  clientSelected!: number;
  @Input() listClients!: Array<Client>;
  list!: Array<BlackListOrder>;
  
  constructor(
    private orderService: OrderService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.list = [];
  }


  getBl() {
    if(this.clientSelected) {
      this.orderService.getBlOrdersClient(this.clientSelected)
      .subscribe((retList: Array<BlackListOrder> | any) => {
        if(!retList || retList.length <= 0) {
          this.list = [];
          this.orderService.openSnackBar('Nada encontrado!', 'Erro')
        } else
          this.list = retList;
      })
    }
  }

  delBl(userId: number) {
    if(this.clientSelected) {
      this.dialog.open(ConfirmDialogComponent, {
        data: true,
        disableClose: true
      }).afterClosed().subscribe(retConfirm => {
        if (retConfirm && retConfirm === true)
          this.orderService.delOrdersBlUser(this.clientSelected, userId)
          .subscribe((retList: any) => {
              this.orderService.openSnackBar('message' in retList ? retList.message : 'Erro');
              setTimeout(() => {
                this.ngOnInit()
              }, 500);
        })
      })
    }
  }
}
