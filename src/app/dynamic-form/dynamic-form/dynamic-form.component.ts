import { Input, Output, EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from '../question-base';
import { QuestionControlService } from '../question-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  @Input() steppers: Array<string> = [];
  @Output() submitValue = new EventEmitter<any>();
  @Input() questions: QuestionBase<string | number>[] | null = [];
  form!: FormGroup;

  constructor(private qcs: QuestionControlService) { }

  ngOnInit(): void {
    this.form = this.qcs.toFormGroup(this.questions, this.steppers);
  }

  onSubmit() {
    this.submitValue.emit(this.form.getRawValue());
  }
}
