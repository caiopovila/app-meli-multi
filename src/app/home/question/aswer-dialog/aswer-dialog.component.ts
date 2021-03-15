import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-aswer-dialog',
  templateUrl: './aswer-dialog.component.html',
  styleUrls: ['./aswer-dialog.component.css']
})
export class AswerDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public textData: AswerDialogComponent
  ) { }

  ngOnInit(): void {
  }

}
