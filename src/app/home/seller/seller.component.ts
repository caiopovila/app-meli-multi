import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataClient } from 'src/app/interfaces/interface_client';
import { DataSearchItem, FilterDataItems } from 'src/app/interfaces/interface_item';
import { ItemsService } from 'src/app/services/items.service';
import { SellersService } from 'src/app/services/sellers.service';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {
  params: FilterDataItems = {};
  pageSizeOptions: number[] = [5, 10, 25, 50];
  totalResults: number = 0;
  seller!: DataSearchItem;
  sellerInfo!: DataClient;

  constructor(
    private serviceItems: ItemsService,
    private serviceSeller: SellersService
  ) { }

  ngOnInit(): void {
    this.params.offset = 0;
    this.params.limit = 5;
  }

  searchSeller(val: string) {
    this.itemsSeller(val);
  }

  itemsSeller(val: string) {
    if (val) {
      this.params.nickname = val;
      let objParam: any = this.params;
      let param = new HttpParams({ fromObject: objParam });

      this.serviceItems.search('', param).subscribe((ret: DataSearchItem) => {
        if (ret && ret.seller) {
          this.seller = ret;
          this.getSellerInfo(ret.seller.id);
        }
        else {
          this.serviceItems.openSnackBar('Nada encontrado.', 'Erro');
        }

        this.params.offset = ret.paging.offset;
        this.totalResults = ret.paging.total;
        this.params.limit = ret.paging.limit;
      })
    }
  }

  getSellerInfo(seller_id: number) {
    this.serviceSeller.infoSeller(seller_id)
    .subscribe((retInfo: any | DataClient) => {
      this.sellerInfo = retInfo;
    })
  }
}
