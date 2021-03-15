import { Component, Input, OnInit } from '@angular/core';
import { DataClient } from 'src/app/interfaces/interface_client';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  @Input() data!: DataClient;
  
  constructor() { }

  ngOnInit(): void {
  }

}
