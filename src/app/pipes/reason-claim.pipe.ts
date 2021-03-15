import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reasonClaim'
})
export class ReasonClaimPipe implements PipeTransform {

  transform(reasonId: string): string {
    if (reasonId[0] + reasonId[1] + reasonId[2] == 'PNR')
      return 'Paguei e não recebi';
    else
    if (reasonId[0] + reasonId[1] + reasonId[2] == 'PDD')
      return 'Produto com defeito';
    else
      return ''
  }

}
