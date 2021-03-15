import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-items-dialog',
  templateUrl: './items-dialog.component.html',
  styleUrls: ['./items-dialog.component.css']
})
export class ItemsDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public order: any
  ) { }

  ngOnInit(): void {
  }

}
