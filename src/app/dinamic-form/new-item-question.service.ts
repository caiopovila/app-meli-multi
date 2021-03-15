import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { DomainDiscovery, Category } from '../interfaces/interface_categories';
import { Client } from '../interfaces/interface_client';
import { Currencies } from '../interfaces/interface_currencies';
import { ListingType } from '../interfaces/interface_listingType';
import { ClientsService } from '../services/clients.service';
import { ItemsService } from '../services/items.service';
import { DropdownQuestion } from './dropdown-question';
import { QuestionBase } from './question-base';
import { TextboxQuestion } from './textbox-question';

@Injectable({
  providedIn: 'root'
})
export class NewItemQuestionService {

    currencies!: Array<Currencies>;
    listingTypes!: Array<ListingType>;
    categoriesList!: Array<DomainDiscovery>;
    allCategories!: Array<Category>;

    questions: QuestionBase<string>[] = [];

  constructor(
    private itemService: ItemsService,
    private serviceClient: ClientsService
  ) { 
    this.itemService
    .get_currencies()
    .subscribe((list: any) => {
      this.currencies = list;
    })
    this.itemService
    .get_listing_types()
    .subscribe((list: any) => {
      this.listingTypes = list;
    })
  }

  public getCategories =  (): void => {
    this.questions.find((equaltitle) => {
      if (equaltitle.key == 'title' && equaltitle.value) 
        this.itemService.domain_discovery(equaltitle.value)
        .subscribe(retDomain => {
              this.questions.find((post, index) => {
                if (post.key == 'category_id') {
                  retDomain.forEach((element: DomainDiscovery) => {
                    this.questions[index].options.push({key: element.category_id, value: element.category_name})
                  });
                }
              })
          })
    });
  };

  getQuestions() {

    let category = new DropdownQuestion({
      key: 'category_id',
      label: 'Categoria',
      required: true,
      order: 2
    });

    let title = new TextboxQuestion({
      key: 'title',
      label: 'Titulo',
      required: true,
      order: 1,
      exec: this.getCategories
    });

    let optClients = new DropdownQuestion({
      key: 'clients',
      label: 'Cliente(s)',
      required: true,
      multiple: true,
      order: 3
    });

    this.serviceClient
    .listClients()
    .subscribe((clientsList: Array<Client>) => {
      clientsList.forEach(client => {
        optClients.options.push({key: `${client.user_id}`, value: client.nickname || ''})
      });
    });

    this.questions.push(optClients, title, category);

    return of(this.questions.sort((a, b) => a.order - b.order));
  }
}
