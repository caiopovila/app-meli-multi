import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shippingMode'
})
export class ShippingModePipe implements PipeTransform {

  transform(modes: Array<string>): Array<{id: string, name: string, description: string}> {
    let ret: Array<{id: string, name: string, description: string}> = [];
    modes.forEach(element => {
      switch (element) {
        case 'not_specified':
          ret.push({ id: 'not_specified', name: 'Não especificado', description: 'isso quer dizer que o vendedor não especificou nenhum preço de frete para seus produtos, e o comprador deve entrar em contato com o vendedor para combinar uma opção de envio e o preço' })
          break;
        case 'custom':
          ret.push({ id: 'custom', name: 'Customizado', description: 'os vendedores podem incluir uma tabela com até 10 valores de frete para um produto, e o comprador deve fornecer esse número ao finalizar o processo' })
          break;
        case 'me1':
          ret.push({ id: 'me1', name: 'Mercado Envios modo 1', description: 'Esta modalidade oferece uma calculadora de fretes para calcular o custo do envio de cada pedido permitindo que o vendedor selecione o serviço de envios de sua preferência, mas escolhendo uma transportadora. O vendedor é encarregado de fazer o gerenciamento do número de rastreamento' })
          break;
        case 'me2':
          ret.push({ id: 'me2', name: 'Mercado Envios modo 2', description: 'Esta modalidade oferece ao vendedor uma etiqueta pré-paga e um número de rastreamento com uma transportadora local pré-definida para cada país. O vendedor não precisará se preocupar em escolher uma transportadora nem com o número de rastreamento. É o modo mais recomendável, pois oferece uma excelente experiência tanto para compradores quanto para vendedores. O ML escolhe a transportadora' })
          break;
      
        default:
          break;
      }
    });

    return ret;
  }

}
