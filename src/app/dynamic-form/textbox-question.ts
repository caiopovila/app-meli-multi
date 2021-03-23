import { QuestionBase } from './question-base';

export class TextboxQuestion<T> extends QuestionBase<T> {
  controlType = 'textbox';
}
