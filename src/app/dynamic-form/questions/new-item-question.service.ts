import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { DropdownQuestion } from '../dropdown-question';
import { TextboxQuestion } from '../textbox-question';

@Injectable({
  providedIn: 'root'
})
export class NewItemQuestionService {

  steppers: Array<string> = [
    'Titulo',
    'Categorização',
    'Informações',
    'Tags',
    'Postagem'
  ];

  constructor() { }

  getQuestions() {

    let price = new TextboxQuestion<number>({
      key: 'price',
      label: 'Preço',
      type: 'number',
      required: true,
      stepper: 'Informações',
      order: 5
    });

    let quantity = new TextboxQuestion<number>({
      key: 'available_quantity',
      label: 'Quantidade disponível',
      type: 'number',
      stepper: 'Informações',
      required: true,
      order: 6
    });

    let title = new TextboxQuestion<string>({
      key: 'title',
      label: 'Titulo',
      type: 'text',
      required: true,
      stepper: 'Titulo',
      order: 2
    });

    let optClients = new DropdownQuestion({
      key: 'clients',
      label: 'Cliente(s)',
      required: true,
      multiple: true,
      stepper: 'Postagem',
      order: 1
    });

    let listingTypes = new DropdownQuestion({
      key: 'listing_type_id',
      label: 'Tipo de publicação',
      required: true,
      stepper: 'Informações',
      order: 3
    });

    let currencies = new DropdownQuestion({
      key: 'currency_id',
      label: 'Moeda',
      required: true,
      stepper: 'Informações',
      order: 4
    });

    let ret = [
      optClients,
      title,
      price,
      listingTypes,
      currencies,
      quantity
    ];

    return of(ret.sort((a, b) => a.order - b.order));

  }
}
