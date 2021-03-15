import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/interface_user';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent implements OnInit {
  @Input() user!: User;
  @Input() passConf!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
