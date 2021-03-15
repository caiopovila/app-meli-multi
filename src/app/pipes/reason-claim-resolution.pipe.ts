import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reasonClaimResolution'
})
export class ReasonClaimResolutionPipe implements PipeTransform {

  transform(reasonId: string): Array<{id: string, name: string}> {
    if (reasonId[0] + reasonId[1] + reasonId[2] == 'PNR')
      return [
        {id: 'refund', name: 'devolução do dinheiro'},
        {id: 'product', name: 'envio do produto'}
      ];
    else
    if (reasonId[0] + reasonId[1] + reasonId[2] == 'PDD')
      return [
        {id: 'return_product', name: 'devolução do produto com devolução do dinheiro'},
        {id: 'change_product', name: 'troca do produto'}
      ];
    else
    return [];
  }

}
