import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'playerActionClaim'
})
export class PlayerActionClaimPipe implements PipeTransform {

  transform(action: string): string {
    switch (action) {
      case 'send_message_to_complainant':
        return 'enviar mensagem para o comprador';
        break;
      case 'send_message_to_mediator':
        return 'enviar mensagem para o mediador';
        break;
      case 'recontact':
        return 'reabrir uma reclamação já encerrada';
        break;
      case 'refund':
        return 'devolver o dinheiro do comprador';
        break;
      case 'open_dispute':
        return 'iniciar uma mediação';
        break;
      case 'send_potential_shipping':
        return 'enviar uma promessa de postagem';
        break;
      case 'add_shipping_evidence':
        return 'postar uma evidência de que o produto foi enviado';
        break;
      case 'send_attachments':
        return 'enviar mensagem com anexo';
        break;
      case 'allow_return_label':
        return 'gerar etiqueta de devolução';
        break;
      case 'send_tracking_number':
        return 'enviar o tracking number';
        break;
    
      default:
        return ''
        break;
    }
  }

}
