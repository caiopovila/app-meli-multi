import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { FilterDialogComponent } from './filter-dialog/filter-dialog.component';
import { ItemsService } from 'src/app/services/items.service';
import { ClientsService } from 'src/app/services/clients.service';
import { Client } from 'src/app/interfaces/interface_client';
import { DataSearchItem, FilterDataItems, Item } from 'src/app/interfaces/interface_item';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  results: Array<Item> = [];
  totalResults: number = 0;
  pageSizeOptions: number[] = [5, 10, 25, 50];
  params: FilterDataItems = {};
  clientSelected: number = 0;
  clientList: Array<Client> = [];


  constructor(
    private serviceItems: ItemsService,
    private serviceClient: ClientsService,
    public dialog: MatDialog
  ) {
    this.params.offset = 0;
    this.params.limit = 10;
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.serviceClient
      .listClients()
      .subscribe((list: Array<Client>) => {
        this.clientList = list;
      })
    });
  }

  searchProduct(q: string): void {
    if (q) {
      let objParam: any = this.params;
      let param = new HttpParams({ fromObject: objParam });

      this.serviceItems.search(q, param)
      .subscribe((ret: DataSearchItem) => {
        if (ret.results.length > 0)
          this.results = ret.results;
        else {
          this.results = [];
          this.serviceItems.openSnackBar('Nada encontrado', 'Erro');
        }

        this.params.offset = ret.paging.offset;
        this.totalResults = ret.paging.total;
        this.params.limit = ret.paging.limit;
      })
    } else {
        this.results = [];
    }

  }

  openFilterDialog(): void {
    this.dialog.open(FilterDialogComponent,
      {
        data: this.params,
        disableClose: true
      }
    ).afterClosed().subscribe((result: FilterDataItems) => {
        this.params = result;
      });
  }
}