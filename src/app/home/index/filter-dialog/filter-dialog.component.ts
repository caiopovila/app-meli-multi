import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CoverageArea } from 'src/app/interfaces/interface_area';
import { Category } from 'src/app/interfaces/interface_categories';
import { FilterDataItems } from 'src/app/interfaces/interface_item';
import { AdressService } from 'src/app/services/adress.service';
import { CategoriesService } from '../../../services/categories.service';


@Component({
  selector: 'app-filter-dialog',
  templateUrl: './filter-dialog.component.html',
  styleUrls: ['./filter-dialog.component.css']
})
export class FilterDialogComponent implements OnInit {
  categories!: Array<Category>;
  states!: Array<CoverageArea>;

  price_min!: number;
  price_max!: number;
  shipping_cost!: Boolean;
  dataFilter: FilterDataItems = {};
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public filterDataItems: FilterDataItems,
    private filterService: CategoriesService,
    private adressService: AdressService
  ) { }

  ngOnInit(): void {
    let prices = this.filterDataItems.price ? this.filterDataItems.price.toString().split('-') : '';
    this.shipping_cost = Boolean(this.filterDataItems.shipping_cost);
    this.price_min = prices && prices != '*' ? Number(prices[0]) : 0;
    this.price_max = prices && prices != '*' ? Number(prices[1]) : 0;
  
    setTimeout(() => {  
      this.filterService.getCategories().subscribe((ret: Array<Category> | any) => {
        this.categories = ret;
      });
      this.adressService.getStates().subscribe((ret: Array<CoverageArea> | any) => {
        this.states = ret;
      })
    });
  }

  clear() {
    this.dataFilter.offset = this.filterDataItems.offset || 0;
    this.dataFilter.limit = this.filterDataItems.limit || 10;
  }

  save() {
    if(this.filterDataItems.nickname && this.filterDataItems.nickname == '')
      delete this.filterDataItems.nickname;
    
    if(!this.filterDataItems.power_seller)
      delete this.filterDataItems.power_seller;

    if(this.shipping_cost)
      this.filterDataItems.shipping_cost = 'free';
    else
      delete this.filterDataItems.shipping_cost;

    if(this.price_max || this.price_min)
      this.filterDataItems.price = `${this.price_min ? this.price_min : '*'}-${this.price_max ? this.price_max : '*'}`;
    else
      delete this.filterDataItems.price;
  }
}