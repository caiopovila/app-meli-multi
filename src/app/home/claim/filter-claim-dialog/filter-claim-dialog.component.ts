import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FilterDataClaim } from 'src/app/interfaces/interface_claim';

@Component({
  selector: 'app-filter-claim-dialog',
  templateUrl: './filter-claim-dialog.component.html',
  styleUrls: ['./filter-claim-dialog.component.css']
})
export class FilterClaimDialogComponent implements OnInit {
  dataFilter: FilterDataClaim = {
    offset: this.filterDataClaim.offset || 0,
    limit: this.filterDataClaim.limit || 10,
    total: this.filterDataClaim.total || 0,
    status: 'opened'
  };

  type = [
    { id: 'mediations', name: 'reclamação entre comprador e vendedor' },
    { id: 'cancel_purchase', name: 'cancelamento de compra pelo comprador' },
    { id: 'cancel_sale', name: 'cancelamento de compra por parte do vendedor' },
    { id: 'return', name: 'Retorno' }
  ];

  stage = [
    { id: 'claim', name: 'etapa de reclamação em que intervêm o comprador e o vendedor' },
    { id: 'dispute', name: 'etapa de mediação em que intervém um representante do Mercado Livre'},
    { id: 'recontact', name: 'Recontato' },
    { id: 'none', name: 'não aplica'}
  ]

  status = [
    { id: 'opened', name: 'aberto' },
    { id: 'closed', name: 'fechado' }
  ]

  constructor(
    @Inject(MAT_DIALOG_DATA) public filterDataClaim: FilterDataClaim
  ) { }

  ngOnInit(): void {
  }

}
