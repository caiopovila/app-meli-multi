import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BodyItem } from 'src/app/interfaces/body-item';
import { Client } from 'src/app/interfaces/interface_client';
import { Currencies } from 'src/app/interfaces/interface_currencies';
import { Item, RetItem } from 'src/app/interfaces/interface_item';
import { ListingType } from 'src/app/interfaces/interface_listingType';
import { ClientsService } from 'src/app/services/clients.service';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-clone-dialog',
  templateUrl: './clone-dialog.component.html',
  styleUrls: ['./clone-dialog.component.css']
})
export class CloneDialogComponent implements OnInit {
  
  clients!: Array<number>;
  clientsList: Array<Client> = [];
  currencies: Array<Currencies> = [];
  listingTypes: Array<ListingType> = [];
  
  item!: Item;

  constructor(
    @Inject(MAT_DIALOG_DATA) public itemId: string,
    private itemService: ItemsService,
    private serviceClient: ClientsService
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.itemService
      .get_item(this.itemId)
      .subscribe((retItem: RetItem) => {
        this.item = retItem.data;
        this.item.description = retItem.description.plain_text;
      });
      this.serviceClient
      .listClients()
      .subscribe((list: Array<Client>) => {
        this.clientsList = list;
      })
      this.itemService
      .get_currencies()
      .subscribe((list: Array<Currencies> | any) => {
        this.currencies = list;
      })
      this.itemService
      .get_listing_types()
      .subscribe((list: Array<ListingType> | any) => {
        this.listingTypes = list;
      })
    })
  }

  save() {
    if (this.clients && this.clients.length > 0) {
      this.clients.forEach((client) => {
        let itemBody: BodyItem = {
          item: this.item,
          client: client
        };
        this.itemService.postItem(itemBody).subscribe((retClone: any) => {
          this.itemService.openSnackBar(retClone.user, 'Finalizado...');
        });   
      });
    } else 
      this.itemService.openSnackBar('Diga-nos o(s) cliente(s)!', 'Erro');
  }
}
