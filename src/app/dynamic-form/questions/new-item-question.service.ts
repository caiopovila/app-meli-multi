import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { DropdownQuestion } from '../dropdown-question';
import { QuestionBase } from '../question-base';
import { TextboxQuestion } from '../textbox-question';

@Injectable({
  providedIn: 'root'
})
export class NewItemQuestionService {

    questions: QuestionBase<string | number>[] = [];

  constructor(
  ) {
    this.getQuestionsInfo();
  }

  getQuestionsInfo() {

    let price = new TextboxQuestion<number>({
      key: 'price',
      label: 'Preço',
      type: 'number',
      required: true,
      order: 5
    });

    let quantity = new TextboxQuestion<number>({
      key: 'available_quantity',
      label: 'Quantidade disponível',
      type: 'number',
      required: true,
      order: 6
    });

    let title = new TextboxQuestion<string>({
      key: 'title',
      label: 'Titulo',
      type: 'text',
      required: true,
      order: 2
    });

    let optClients = new DropdownQuestion({
      key: 'clients',
      label: 'Cliente(s)',
      required: true,
      multiple: true,
      order: 1
    });

    let listingTypes = new DropdownQuestion({
      key: 'listing_type_id',
      label: 'Tipo de publicação',
      required: true,
      order: 3
    });

    let currencies = new DropdownQuestion({
      key: 'currency_id',
      label: 'Moeda',
      required: true,
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


    of(ret.sort((a, b) => a.order - b.order)).subscribe(returnOrder => {
      this.questions = returnOrder;
    });

  }
}
