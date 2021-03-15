import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FilterDataQuestions } from 'src/app/interfaces/interface_questions';


@Component({
  selector: 'app-filter-question',
  templateUrl: './filter-question.component.html',
  styleUrls: ['./filter-question.component.css']
})
export class FilterQuestionComponent implements OnInit {

  StatusQuestion = [
    { id: "ANSWERED", name: "Respondida" },
    { id: "BANNED", name: "Banida" },
    { id: "CLOSED_UNANSWERED", name: "Fechada sem resposta" },
    { id: "DELETED", name: "Deletada" },
    { id: "UNANSWERED", name: "Não respondida" },
    { id: "UNDER_REVIEW", name: "Sob revisão" }
  ];

  dataFilter: FilterDataQuestions = {};
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public filterDataQuestion: FilterDataQuestions
  ) { }

  ngOnInit(): void {
  }

  clear() {
    this.dataFilter.offset = this.filterDataQuestion.offset || 0;
    this.dataFilter.limit = this.filterDataQuestion.limit || 10;
  }

  save() {
    if (this.filterDataQuestion.item == '')
      delete this.filterDataQuestion.item;

    if (this.filterDataQuestion.status == '')
      delete this.filterDataQuestion.status;
  }
}
