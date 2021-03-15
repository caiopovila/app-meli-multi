import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from '../question-base';

@Component({
  selector: 'app-dinamic-form-question',
  templateUrl: './dinamic-form-question.component.html',
  styleUrls: ['./dinamic-form-question.component.css']
})
export class DinamicFormQuestionComponent {
  @Input() question!: QuestionBase<string>;
  @Input() form!: FormGroup;
  get isValid() { return this.form.controls[this.question.key].valid; }

}
