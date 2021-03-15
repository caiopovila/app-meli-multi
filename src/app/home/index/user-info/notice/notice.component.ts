import { Component, Input, OnInit } from '@angular/core';
import { Notice } from 'src/app/interfaces/interface_notices';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css']
})
export class NoticeComponent implements OnInit {
  @Input() notices!: Array<Notice>;
  
  constructor() { }

  ngOnInit(): void {
  }

}
