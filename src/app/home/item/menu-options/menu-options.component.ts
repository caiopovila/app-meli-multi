import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewItemDialogComponent } from '../new-item-dialog/new-item-dialog.component';


@Component({
  selector: 'app-menu-options',
  templateUrl: './menu-options.component.html',
  styleUrls: ['./menu-options.component.css']
})
export class MenuOptionsComponent implements OnInit {

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openNewItemDialog(): void {
    this.dialog.open(NewItemDialogComponent,
      {
        disableClose: true
      }
    );
  }
}
