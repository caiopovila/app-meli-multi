import { Component, OnInit } from '@angular/core';
import { NewItemQuestionService } from 'src/app/dynamic-form/questions/new-item-question.service';
import { QuestionBase } from 'src/app/dynamic-form/question-base';


@Component({
  selector: 'app-new-item-dialog',
  templateUrl: './new-item-dialog.component.html',
  styleUrls: ['./new-item-dialog.component.css']
})
export class NewItemDialogComponent implements OnInit {

  questions$!: QuestionBase<string | number>[];

  constructor(
    private service: NewItemQuestionService
  ) { }

  ngOnInit(): void {
    this.questions$ = this.service.questions;
  }
}
