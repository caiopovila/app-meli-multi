import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Currencies } from 'src/app/interfaces/interface_currencies';
import { Item, RetItem } from 'src/app/interfaces/interface_item';
import { ItemsService } from 'src/app/services/items.service';
import { BodyItem } from '../../../interfaces/body-item';


@Component({
  selector: 'app-up-item-dialog',
  templateUrl: './up-item-dialog.component.html',
  styleUrls: ['./up-item-dialog.component.css']
})
export class UpItemDialogComponent implements OnInit {

  public item = {} as Item;
  currencies!: Array<Currencies>;

  constructor(
    @Inject(MAT_DIALOG_DATA) public productId: string,
    private itemService: ItemsService
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.itemService
      .get_item(this.productId)
      .subscribe((retItem: RetItem | any) => {
        this.item = retItem.data;
        this.item.description = retItem.description[0] && retItem.description[0].plain_text ? retItem.description[0].plain_text : '';
      })
      this.itemService
      .get_currencies()
      .subscribe((list: any) => {
        this.currencies = list;
      })
    });
  }

  save() {
    let itemBody: BodyItem = {
      item: this.item,
      client: this.item.seller_id
    };
    this.itemService.putItem(itemBody).subscribe((retClone: any) => {
      this.itemService.openSnackBar(retClone.id ? retClone.id : 'Item', 'Finalizado...');
    });   
  }
}
