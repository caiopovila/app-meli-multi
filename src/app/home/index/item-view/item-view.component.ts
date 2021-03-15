import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Item } from 'src/app/interfaces/interface_item';
import { InfoItemDialogComponent } from '../../item/info-item-dialog/info-item-dialog.component';
import { CloneDialogComponent } from './clone-dialog/clone-dialog.component';
import { ReviewComponent } from './review/review.component';

@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.css']
})
export class ItemViewComponent {
  @Input() item!: Item;

  constructor (
    private dialog: MatDialog
  ) { }

  clone() {
    this.dialog.open(CloneDialogComponent, {
      data: this.item.id
    })
  }

  reviews() {
    this.dialog.open(ReviewComponent, {
      data: this.item.id
    })
  }

  ifoProduct() {
    this.dialog.open(InfoItemDialogComponent,
      {
        data: this.item.id
      }
    );
  }
}
