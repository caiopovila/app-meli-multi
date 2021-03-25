import { Injectable } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { QuestionBase } from './question-base';

@Injectable({
  providedIn: 'root'
})
export class QuestionControlService {

  constructor() { }

  toFormGroup(questionsList: any, steppers?: Array<string>): FormGroup {
    let group: any = {};

    if (steppers && steppers.length > 0) {

      steppers.forEach((stepper: string) => {
        let childGroup: any = {};

        questionsList.forEach((question: QuestionBase<number | string>) => {
          if (question.stepper === stepper)
            childGroup[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
                                                    : new FormControl(question.value || '');
        });

        group[stepper] = new FormGroup(childGroup);

      });

    } else {

      questionsList.forEach((question: QuestionBase<number | string>) => {
        group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
                                                : new FormControl(question.value || '');
      });

    }

    return new FormGroup(group);
  }
}
