import { Component, Input, OnInit } from '@angular/core';
import { DataClient } from 'src/app/interfaces/interface_client';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.css']
})
export class FormClientComponent implements OnInit {
  @Input()
  clientData!: DataClient;
  
  constructor() { }

  ngOnInit(): void {
  }

}
