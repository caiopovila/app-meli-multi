import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataItemParam } from 'src/app/interfaces/interface_item';

@Component({
  selector: 'app-filter-item-dialog',
  templateUrl: './filter-item-dialog.component.html',
  styleUrls: ['./filter-item-dialog.component.css']
})
export class FilterItemDialogComponent implements OnInit {
  dataFilter = {} as DataItemParam;
  
  status = {
    id: "status",
    name: "Status",
    values: [
        {
            id: "pending",
            name: "Inactive items for debt or MercadoLibre policy violation"
        },
        {
            id: "not_yet_active",
            name: "Items newly created or pending activation"
        },
        {
            id: "programmed",
            name: "Items scheduled for future activation"
        },
        {
            id: "active",
            name: "Active items"
        },
        {
            id: "paused",
            name: "Paused Items"
        },
        {
            id: "closed",
            name: "Closed Items"
        }
    ]
  }

  subStatus = {
    id: "sub_status",
    name: "Substatus",
    values: [
        {
            id: "deleted",
            name: "Deleted substatus"
        },
        {
            id: "forbidden",
            name: "Forbidden substatus"
        },
        {
            id: "freezed",
            name: "Freezed substatus"
        },
        {
            id: "held",
            name: "Held substatus"
        },
        {
            id: "suspended",
            name: "Suspended substatus"
        },
        {
            id: "waiting_for_patch",
            name: "Waiting for patch substatus"
        },
        {
            id: "warning",
            name: "Warning items with MercadoLibre policy violation"
        }
    ]
  }

  buyingMode = {
    id: "buying_mode",
    name: "Buying Mode",
    values: [
        {
            id: "buy_it_now",
            name: "Buy it now"
        },
        {
            id: "classified",
            name: "Classified"
        },
        {
            id: "auction",
            name: "Auction"
        }
    ]
  }

  listingTypeId ={
    id: "listing_type_id",
    name: "Listing type",
    values: [
        {
            id: "gold_pro",
            name: "Gold proffesional"
        },
        {
            id: "gold_special",
            name: "Gold special"
        },
        {
            id: "gold_premium",
            name: "Gold premium"
        },
        {
            id: "gold",
            name: "Gold"
        },
        {
            id: "silver",
            name: "Silver"
        },
        {
            id: "bronze",
            name: "Bronze"
        },
        {
            id: "free",
            name: "Free"
        }
    ]
  }

  availableOrders = [
    {
        id: "stop_time_asc",
        name: "Order by stop time ascending"
    },
    {
        id: "stop_time_desc",
        name: "Order by stop time descending"
    },
    {
        id: "start_time_asc",
        name: "Order by start time ascending"
    },
    {
        id: "start_time_desc",
        name: "Order by start time descending"
    },
    {
        id: "available_quantity_asc",
        name: "Order by available quantity ascending"
    },
    {
        id: "available_quantity_desc",
        name: "Order by available quantity descending"
    },
    {
        id: "sold_quantity_asc",
        name: "Order by sold quantity ascending"
    },
    {
        id: "sold_quantity_desc",
        name: "Order by sold quantity descending"
    },
    {
        id: "price_asc",
        name: "Order by price ascending"
    },
    {
        id: "price_desc",
        name: "Order by price descending"
    },
    {
        id: "last_updated_desc",
        name: "Order by lastUpdated descending"
    },
    {
        id: "last_updated_asc",
        name: "Order by last updated ascending"
    },
    {
        id: "total_sold_quantity_asc",
        name: "Order by total sold quantity ascending"
    },
    {
        id: "total_sold_quantity_desc",
        name: "Order by total sold quantity descending"
    },
    {
        id: "inventory_id_asc",
        name: "Order by inventory id ascending"
    }
  ]

  constructor(
    @Inject(MAT_DIALOG_DATA) public filterDataItems: DataItemParam
  ) { }

  ngOnInit(): void {
  }

  clear() {
    this.dataFilter.offset = this.filterDataItems.offset || 0;
    this.dataFilter.limit = this.filterDataItems.limit || 10;
  }
}
