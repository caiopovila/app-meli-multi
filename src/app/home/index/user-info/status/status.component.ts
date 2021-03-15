import { Component, Input, OnInit } from '@angular/core';
import { Status } from 'src/app/interfaces/interface_client';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  @Input() status!: Status;
  
  constructor() { }

  ngOnInit(): void {
  }

}
