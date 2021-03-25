import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicFormQuestionComponent } from './dynamic-form-question/dynamic-form-question.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [DynamicFormQuestionComponent, DynamicFormComponent],
  imports: [
    MatSelectModule,
    MatInputModule,
    MatStepperModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    DynamicFormQuestionComponent,
    DynamicFormComponent
  ]
})
export class DynamicFormModule { }
