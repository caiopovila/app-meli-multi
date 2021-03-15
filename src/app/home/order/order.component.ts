import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ClientsService } from 'src/app/services/clients.service';
import { OrderService } from 'src/app/services/order.service';
import { FilterComponent, FilterDataOrders } from './filter/filter.component';
import { ItemsDialogComponent } from './items-dialog/items-dialog.component';
import { MessageOrderDialogComponent } from './message-order-dialog/message-order-dialog.component';
import { SettingOrderDialogComponent } from './setting-dialog/setting-dialog.component';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  listClients: any;
  clientSelected: any;
  listOrders: any;
  totalResults: number = 0;
  pageSizeOptions: number[] = [5, 10, 25, 50];
  params: FilterDataOrders = {};

  constructor(
    private clientsService: ClientsService,
    private orderService: OrderService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.listOrders = '';
    setTimeout(() => {
      this.clientsService.listClients()
      .subscribe(clientsList => {
        this.listClients = clientsList;
      })
    })
  }
  
  getOrders(cliId: number, item?: string): void {
    if (cliId) {
      if (item)
        this.params.q = item;
        
      let getPa: any = this.params;
      let param = new HttpParams({fromObject: getPa});

      this.orderService.orderList(cliId, param)
      .subscribe((retList: any) => {
        if (retList.results.legth > 0) {
          this.listOrders = retList.results;
          this.params.offset = retList.paging.offset;
          this.totalResults = retList.paging.total;
          this.params.limit = retList.paging.limit;
        } else
          this.orderService.openSnackBar('Nada encontrado!', 'Erro');
      })
    } else
      this.orderService.openSnackBar('Diga-nos o cliente.', 'Erro');
  }

  openFilterDialog(): void {
    this.dialog.open(FilterComponent,
      {
        data: this.params,
        disableClose: true
      }
    ).afterClosed().subscribe((result: FilterDataOrders) => {
        this.params = result;
      });
  }


  openSettingDialog(): void {
    this.dialog.open(SettingOrderDialogComponent,
      {
        data: this.listClients,
        disableClose: true
      }
    )
  }

  getMessages(order: any) {
    this.dialog.open(MessageOrderDialogComponent, {
      data: order
    })
  }

  getItems(order: any) {
    this.dialog.open(ItemsDialogComponent, {
      data: order
    })
  }
}
