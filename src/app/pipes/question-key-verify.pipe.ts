import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'questionKeyVerify'
})
export class QuestionKeyVerifyPipe implements PipeTransform {

  transform(key: string, values: any): boolean {
    console.log(values);
    if (key in values)
      return true;
    else
      return false;
  }

}
