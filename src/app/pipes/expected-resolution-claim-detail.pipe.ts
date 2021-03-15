import { Pipe, PipeTransform } from '@angular/core';
import { ExpectedResolutionsClaimType } from '../interfaces/interface_claim';

@Pipe({
  name: 'expectedResolutionClaimDetail'
})
export class ExpectedResolutionClaimDetailPipe implements PipeTransform {

  transform(resolutions: ExpectedResolutionsClaimType[]): string {
    let ret = '';
    resolutions.forEach(resolution => {
      switch (resolution) {
        case 'change_product':
          ret += 'Troca do produto. ';
          break;
        case 'product':
          ret += 'Envio do produto. ';
          break;
        case 'refund':
          ret += 'Devolução do dinheiro. ';
          break;
        case 'return_product':
          ret += 'Devolução do produto com devolução do dinheiro. ';
          break;
      
        default:
          break;
      }
    });
    return ret;
  }

}