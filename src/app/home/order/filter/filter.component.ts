import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface FilterDataOrders {
  status?: string,
  from?: any,
  to?: any,
  offset?: number,
  limit?: number,
  q?: string
}

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  StatusOrder = [
    { id: "confirmed", name: "Confirmado" },
    { id: "payment_required", name: "Pagamento pendente" },
    { id: "payment_in_process", name: "Pagamento em processo" },
    { id: "partially_paid", name: "Pagamento parcial" },
    { id: "paid", name: "Pago" },
    { id: "cancelled", name: "Cancelado" },
    { id: "invalid", name: "Inválido" }
  ];

  dataFilter: FilterDataOrders = {};
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public filterDataOrder: FilterDataOrders
  ) { }

  ngOnInit(): void {
  }

  clear() {
    this.dataFilter.offset = this.filterDataOrder.offset || 0;
    this.dataFilter.limit = this.filterDataOrder.limit || 10;
  }

  save() {
    if (this.filterDataOrder.status == '')
      delete this.filterDataOrder.status

    if (this.filterDataOrder.from == '')
      delete this.filterDataOrder.from

    if (this.filterDataOrder.to == '')
      delete this.filterDataOrder.to
  }
}
