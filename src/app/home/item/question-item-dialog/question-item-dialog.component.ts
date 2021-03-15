import { HttpParams } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FilterDataQuestions, Question, SearchQuestions } from 'src/app/interfaces/interface_questions';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-question-item-dialog',
  templateUrl: './question-item-dialog.component.html',
  styleUrls: ['./question-item-dialog.component.css']
})
export class QuestionItemDialogComponent implements OnInit {
  listQuestions!: Array<Question>;
  totalResults: number = 0;
  pageSizeOptions: number[] = [5, 10, 25, 50];
  params: FilterDataQuestions = {};

  constructor(
    private questionService: QuestionsService,
    @Inject(MAT_DIALOG_DATA) public dataList: any
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.params.limit = 10;
      this.params.offset = 0;
      this.getQuestions();
    })
  }

  getQuestions() {
    if (this.dataList.client) {
      
      this.params.item = this.dataList.id;
      let paramAny: any = this.params;
      let param = new HttpParams({ fromObject: paramAny });

      this.questionService.questionsList(this.dataList.client, param)
      .subscribe((retList: SearchQuestions | any) => {
        if(retList.questions.length > 0) {
          this.totalResults = retList.total;
          this.params.limit = retList.limit;
          this.params.offset = retList.filters.offset;
          this.listQuestions = retList.questions;
        } else
          this.questionService.openSnackBar('Nada encontrado.', 'Erro');
      })
    } else
      this.questionService.openSnackBar("Diga-nos o cliente.", 'Erro');
  }

}
