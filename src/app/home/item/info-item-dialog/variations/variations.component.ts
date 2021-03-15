import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Item } from 'src/app/interfaces/interface_item';

@Component({
  selector: 'app-variations',
  templateUrl: './variations.component.html',
  styleUrls: ['./variations.component.css']
})
export class VariationsComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public item: Item
  ) { }

  ngOnInit(): void {
  }

}
