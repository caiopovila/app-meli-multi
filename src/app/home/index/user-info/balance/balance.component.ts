import { Component, Input, OnInit } from '@angular/core';
import { Balance } from 'src/app/interfaces/interface_balance';
import { TotalQuestions } from 'src/app/interfaces/interface_questions';
import { TotalVisits } from 'src/app/interfaces/interface_visits';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {
  @Input() balance!: Balance;
  @Input() questions!: TotalQuestions;
  @Input() visits!: TotalVisits;

  constructor() { }

  ngOnInit(): void {
  }

}
