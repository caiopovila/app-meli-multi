import { HttpParams } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Review, ReviewsItem } from 'src/app/interfaces/interface_item';
import { Paging } from 'src/app/interfaces/interface_paging';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  pageSizeOptions = [5, 10, 25, 50];
  reviews!: ReviewsItem;
  paging: Paging = {
    limit: 5,
    offset: 0,
    total: 0
  };

  constructor(
    @Inject(MAT_DIALOG_DATA) public itemId: string,
    private itemService: ItemsService
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.getReviews();
    })
  }

  getReviews(): void {
    let anyPag: any = this.paging;
    let param = new HttpParams({ fromObject: anyPag })
    this.itemService.get_reviews_item(this.itemId, param)
    .subscribe((retReviews: ReviewsItem) => {
      this.reviews = retReviews;
      this.paging = retReviews.paging;
    })
  }
}
