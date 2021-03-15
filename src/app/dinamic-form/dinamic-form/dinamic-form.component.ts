import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Attributes } from 'src/app/interfaces/interface_item';
import { QuestionBase } from '../question-base';
import { QuestionControlService } from '../question-control.service';

@Component({
  selector: 'app-dinamic-form',
  templateUrl: './dinamic-form.component.html',
  styleUrls: ['./dinamic-form.component.css']
})
export class DinamicFormComponent implements OnInit {
  @Input() questions: QuestionBase<string>[] = [];
  form!: FormGroup;
  payLoad = '';
  attributes!: Array<Attributes>;

  constructor(private qcs: QuestionControlService) {  }

  ngOnInit() {
    if (!this.form)
      this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }

  getAttributes() {
    if ('category_id' in this.form.getRawValue()) {

    } 
  }
  
  getValues() {
    return this.form.getRawValue();
  }
}
