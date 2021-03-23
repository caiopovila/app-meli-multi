import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Client } from 'src/app/interfaces/interface_client';
import { DataItemParam, Item, ItemsClient, RetItem } from 'src/app/interfaces/interface_item';
import { ClientsService } from 'src/app/services/clients.service';
import { ItemsService } from 'src/app/services/items.service';
import { ConfirmDialogComponent } from '../question/confirm-dialog/confirm-dialog.component';
import { FilterItemDialogComponent } from './filter-item-dialog/filter-item-dialog.component';
import { InfoItemDialogComponent } from './info-item-dialog/info-item-dialog.component';
import { NewItemDialogComponent } from './new-item-dialog/new-item-dialog.component';
import { QuestionItemDialogComponent } from './question-item-dialog/question-item-dialog.component';
import { UpItemDialogComponent } from './up-item-dialog/up-item-dialog.component';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  listClients!: Array<Client>;
  clientSelected!: number;
  listProducts: Array<RetItem> = [];
  totalResults: number = 0;
  pageSizeOptions: number[] = [5, 10, 25, 50];
  params = {} as DataItemParam;

  constructor(
    private clientsService: ClientsService,
    private productsService: ItemsService,
    private dialog: MatDialog
  ) {
    this.params.limit = 10;
    this.params.offset = 0;
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.clientsService.listClients()
      .subscribe(clientsList => {
        this.listClients = clientsList;
      })
    })
  }

  getProducts(): void {
    this.listProducts = [];
    if (this.clientSelected) {
      let paramAny: any = this.params;
      let param = new HttpParams({ fromObject: paramAny });

      this.productsService.search('', param, this.clientSelected)
      .subscribe((retList: ItemsClient) => {
        if(retList.results.length > 0) {
          this.totalResults = retList.paging.total;
          this.params.limit = retList.paging.limit;
          this.params.offset = retList.paging.offset;
          this.getInfoProducts(retList.results);
        } else
          this.productsService.openSnackBar('Nada encontrado', 'Erro');
      })
    } else
      this.productsService.openSnackBar("Diga-nos o cliente.", 'Erro');
  }

  getInfoProducts(results: Array<string>): void {
    results.forEach(itemId => {
      this.productsService.get_item(itemId).subscribe(retProd => {
        if (retProd)
          this.listProducts.push(retProd);
      })
    });
  }

  openFilterDialog(): void {
    this.dialog.open(FilterItemDialogComponent,
      {
        data: this.params,
        disableClose: true
      }
    ).afterClosed().subscribe((result: any) => {
        this.params = result;
        this.getProducts();
      });
  }

  deleteItem(itemId: string): void {
    this.dialog.open(ConfirmDialogComponent,
      {
        data: true,
        disableClose: true
      }
    ).afterClosed().subscribe((result: boolean) => {
        if (result === true)
          this.productsService.deleteItem(this.clientSelected, itemId)
          .subscribe(retDeletion => {
              this.getProducts();
          });
      });
  }

  openNewItemDialog(): void {
    this.dialog.open(NewItemDialogComponent,
      {
        disableClose: true
      }
    );
  }

  ifoProduct(product: Item): void {
    this.dialog.open(InfoItemDialogComponent,
      {
        data: product
      }
    );
  }

  upProduct(productId: string | number) {
    this.dialog.open(UpItemDialogComponent,
      {
        data: productId
      }
    );
  }

  getQuestions(productId: string | number) {
    this.dialog.open(QuestionItemDialogComponent,
      {
        data: { client: this.clientSelected, id: productId }
      }
    );
  }
}
