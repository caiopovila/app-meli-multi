import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Attributes } from 'src/app/interfaces/interface_item';

@Component({
  selector: 'app-attributes',
  templateUrl: './attributes.component.html',
  styleUrls: ['./attributes.component.css']
})
export class AttributesComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public attr: Array<Attributes>,
    ) { }

  ngOnInit(): void {
  }

}
