import { Pipe, PipeTransform } from '@angular/core';
import { Client } from '../interfaces/interface_client';
import { ClientsService } from '../services/clients.service';

@Pipe({
  name: 'creatingOptions'
})
export class CreatingOptionsPipe implements PipeTransform {

  constructor(
    private client: ClientsService
  ) { }
  
  transform(key: string, ...args: unknown[]): any {
    switch (key) {
      case 'clients':
          this.client.listClients().subscribe((list: Array<Client>) => {
            let ret: {key: string, value: string}[] = [];
            list.forEach(element => {
              ret.push({key: `${element.user_id}`, value: element.nickname || `${element.user_id}`})
            });
            return ret;
          })
        break;
    
      default:
        return null;
        break;
    }
  }

}
