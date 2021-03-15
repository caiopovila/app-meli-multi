import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DinamicFormQuestionComponent } from './dinamic-form-question/dinamic-form-question.component';
import { DinamicFormComponent } from './dinamic-form/dinamic-form.component';

import { PipesModule } from '../pipes/pipes.module';
import { MatIconModule } from '@angular/material/icon'; 
import { MatButtonModule } from '@angular/material/button'; 

import { MatStepperModule } from '@angular/material/stepper'; 
import { MatInputModule } from '@angular/material/input'; 
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field'; 

@NgModule({
  declarations: [DinamicFormQuestionComponent, DinamicFormComponent],
  imports: [
    MatSelectModule,
    MatInputModule,
    MatStepperModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    CommonModule,
    MatButtonModule,
    MatIconModule,
    PipesModule
  ],
  exports: [
    DinamicFormQuestionComponent,
    DinamicFormComponent
  ]
})
export class DinamicFormModule { }
