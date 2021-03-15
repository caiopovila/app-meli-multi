import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Item, RetItem } from 'src/app/interfaces/interface_item';
import { ItemsService } from 'src/app/services/items.service';
import { AttributesComponent } from './attributes/attributes.component';
import { VariationsComponent } from './variations/variations.component';

@Component({
  selector: 'app-info-item-dialog',
  templateUrl: './info-item-dialog.component.html',
  styleUrls: ['./info-item-dialog.component.css']
})
export class InfoItemDialogComponent implements OnInit {
  product!: Item;

  constructor(
    @Inject(MAT_DIALOG_DATA) public item: Item | any,
    private itemService: ItemsService,
    private dialog: MatDialog
    ) { }

  ngOnInit(): void {
    if (typeof this.item === 'string')
      setTimeout(() => {
        this.itemService
        .get_item(this.item)
        .subscribe((retItem: RetItem) => {
          this.product = retItem.data;
        })
      });
    else
    if ('id' in this.item)
      this.product = this.item;
  }

  openVariations(): void {
    this.dialog.open(VariationsComponent,
      {
        data: this.product
      }
    );
  }

  openAttributes(): void {
    this.dialog.open(AttributesComponent,
      {
        data: this.product.attributes
      }
    );
  }
}
