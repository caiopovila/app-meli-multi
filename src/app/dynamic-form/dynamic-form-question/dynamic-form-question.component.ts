import { AfterViewInit, Component, Input, OnChanges } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Client } from 'src/app/interfaces/interface_client';
import { Currencies } from 'src/app/interfaces/interface_currencies';
import { ListingType } from 'src/app/interfaces/interface_listingType';
import { ClientsService } from 'src/app/services/clients.service';
import { ItemsService } from 'src/app/services/items.service';
import { QuestionBase } from '../question-base';

@Component({
  selector: 'app-dynamic-form-question',
  templateUrl: './dynamic-form-question.component.html',
  styleUrls: ['./dynamic-form-question.component.css']
})
export class DynamicFormQuestionComponent implements AfterViewInit, OnChanges {
  @Input() question!: QuestionBase<string | number>;
  @Input() form!: any;

  options!: Observable<{key: string, value: string}[]>;
  isValid!: boolean;

  constructor (
    private client: ClientsService,
    private listingType: ItemsService
  ) { }

  ngOnChanges(): void {
      this.isValid = this.validation;
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.getOtions(this.question.key ? this.question.key : '');
    }, 0);
   }

  get validation() { return this.form.controls[this.question.key].valid }

  getOtions(key: string): void {
    let ret: {key: string, value: string}[] = [];
    switch (key) {
      case 'clients':
          this.client.listClients().subscribe((list: Array<Client>) => {
            list.forEach(element => {
              ret.push({key: `${element.user_id}`, value: element.nickname || `${element.user_id}`})
            });
          })
        break;
      case 'listing_type_id':
          this.listingType.get_listing_types().subscribe((list: Array<ListingType> | any) => {
            list.forEach((element: ListingType) => {
              ret.push({key: element.id, value: element.name })
            });
          })
        break;
      case 'currency_id':
          this.listingType.get_currencies().subscribe((list: Array<Currencies> | any) => {
            list.forEach((element: Currencies) => {
              ret.push({key: element.id, value: `${element.symbol} - ${element.description}` })
            });
          })
        break;
        default:
          break;
    }
    this.options = new Observable((ob) => {
      ob.next(ret);
    });
  }
}
