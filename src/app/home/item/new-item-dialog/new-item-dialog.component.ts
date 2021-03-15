import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NewItemQuestionService } from 'src/app/dinamic-form/new-item-question.service';
import { QuestionBase } from 'src/app/dinamic-form/question-base';


@Component({
  selector: 'app-new-item-dialog',
  templateUrl: './new-item-dialog.component.html',
  styleUrls: ['./new-item-dialog.component.css']
})
export class NewItemDialogComponent implements OnInit {

  questions$: Observable<QuestionBase<any>[] | any>;
  
  constructor(
    private service: NewItemQuestionService
  ) { 
    this.questions$ = this.service.getQuestions();
  }

  ngOnInit(): void {
  }
}