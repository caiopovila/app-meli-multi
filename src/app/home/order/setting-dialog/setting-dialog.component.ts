import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-setting-dialog',
  templateUrl: './setting-dialog.component.html',
  styleUrls: ['./setting-dialog.component.css']
})
export class SettingOrderDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public listClients: any
  ) { }

  ngOnInit(): void {
  }

}
