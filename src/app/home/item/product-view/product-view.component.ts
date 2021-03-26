import { Component, OnInit, Input } from '@angular/core';
import { RetItem, Item } from 'src/app/interfaces/interface_item';
import { MatDialog } from '@angular/material/dialog';

import { InfoItemDialogComponent } from '../info-item-dialog/info-item-dialog.component';
import { QuestionItemDialogComponent } from '../question-item-dialog/question-item-dialog.component';
import { UpItemDialogComponent } from '../up-item-dialog/up-item-dialog.component';
import { ItemsService } from 'src/app/services/items.service';

import { ConfirmDialogComponent } from '../../question/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {
  @Input() product!: RetItem;
  @Input() client!: number;

  constructor(
    private dialog: MatDialog,
    private productsService: ItemsService
  ) { }

  ngOnInit(): void {
  }

  deleteItem(): void {
    this.dialog.open(ConfirmDialogComponent,
      {
        data: true,
        disableClose: true
      }
    ).afterClosed().subscribe((result: boolean) => {
        if (result === true)
          this.productsService.deleteItem(this.client, this.product.data.id)
          .subscribe((retDeletion: any) => {
            this.productsService.openSnackBar("Deleção.", 'Ok');
          });
      });
  }

  ifoProduct(): void {
    this.dialog.open(InfoItemDialogComponent,
      {
        data: this.product.data
      }
    );
  }

  upProduct() {
    this.dialog.open(UpItemDialogComponent,
      {
        data: this.product.data.id
      }
    );
  }

  getQuestions() {
    this.dialog.open(QuestionItemDialogComponent,
      {
        data: { client: this.client, id: this.product.data.id }
      }
    );
  }
}
