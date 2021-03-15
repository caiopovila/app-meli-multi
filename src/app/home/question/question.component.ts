import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FilterDataQuestions } from 'src/app/interfaces/interface_questions';
import { ClientsService } from 'src/app/services/clients.service';
import { QuestionsService } from 'src/app/services/questions.service';
import { FilterQuestionComponent } from './filter-question/filter-question.component';
import { SettingDialogComponent } from './setting-dialog/setting-dialog.component';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  listClients: any;
  clientSelected: any;
  listQuestions: any;
  totalResults: number = 0;
  pageSizeOptions: number[] = [5, 10, 25, 50];
  params: any = {};

  constructor(
    private clientsService: ClientsService,
    private questionService: QuestionsService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.params.limit = 10;
    this.params.offset = 0;
    this.listQuestions = '';

    setTimeout(() => {
      this.clientsService.listClients()
      .subscribe(clientsList => {
        this.listClients = clientsList;
      })
    })
  }

  getQuestions() {
    if (this.clientSelected) {
      let param = new HttpParams({ fromObject: this.params });

      this.questionService.questionsList(this.clientSelected, param)
      .subscribe((retList: any) => {
        if(retList.questions.length > 0) {
          this.totalResults = retList.total;
          this.params.limit = retList.limit;
          this.params.offset = retList.filters.offset;
          this.listQuestions = retList.questions;
        } else
          this.clientsService.openSnackBar('Nada encontrado.', 'Erro');
      })
    } else
      this.clientsService.openSnackBar("Diga-nos o cliente.", 'Erro');
  }

  openFilterDialog(): void {
    this.dialog.open(FilterQuestionComponent,
      {
        data: this.params,
        disableClose: true
      }
    ).afterClosed().subscribe((result: FilterDataQuestions) => {
        this.params = result;
      });
  }

  openSettingDialog(): void {
    this.dialog.open(SettingDialogComponent,
      {
        data: this.listClients,
        disableClose: true
      }
    )
  }

}
