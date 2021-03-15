import { HttpParams } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Balance } from 'src/app/interfaces/interface_balance';
import { DataClient } from 'src/app/interfaces/interface_client';
import { ListNotices, Notice } from 'src/app/interfaces/interface_notices';
import { TotalQuestions } from 'src/app/interfaces/interface_questions';
import { TotalVisits } from 'src/app/interfaces/interface_visits';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  @Input() client_id!: number;

  visits!: TotalVisits;
  notices!: Array<Notice>;
  data!: DataClient;
  balance!: Balance;
  questions!: TotalQuestions;

  constructor(
    private serviceClient: ClientsService
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
        this.getInfo(this.client_id);
    })
  }


  getInfo(client_id: number): void {
    if (client_id) {
      this.getListNotices(client_id);
      this.getTotalVisits(client_id);
      this.getTotalQuestions(client_id);
      this.getData(client_id);
      this.getBalance(client_id);
    }
  }

  getListNotices(client_id: number): void {
    this.serviceClient.getNotices(client_id).subscribe((retList: ListNotices | any) => {
      this.notices = retList.results;
    })
  }

  getTotalVisits(client_id: number): void {
    let dateFirst = new Date();
    dateFirst.setDate(1);
    dateFirst.setHours(0, 0, 0, 0);
    
    let param = new HttpParams()
    .set('date_from', dateFirst.toISOString())
    .set('date_to', new Date().toISOString());

    this.serviceClient.getTotalVisits(client_id, param).subscribe((retVisits: any) => {
      this.visits = retVisits;
    })
  }

  getTotalQuestions(client_id: number): void {
    let dateFirst = new Date();
    dateFirst.setDate(1);
    dateFirst.setHours(0, 0, 0, 0);
    
    let param = new HttpParams()
    .set('date_from', dateFirst.toISOString())
    .set('date_to', new Date().toISOString());

    this.serviceClient.getTotalQuestions(client_id, param).subscribe((retQuestions: any) => {
      this.questions = retQuestions;
    })
  }
  
  getData(client_id: number): void {
    this.serviceClient.getClient(client_id).subscribe((retData: any) => {
      this.data = retData;
    })
  }
  
  getBalance(client_id: number): void {
    this.serviceClient.getBalanceClient(client_id).subscribe((retBalance: any) => {
      this.balance = retBalance;
    })
  }

}
