import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataClaim, DataSearchClaim, ExpectedResolutionsClaim, FilterDataClaim } from 'src/app/interfaces/interface_claim';
import { Client } from 'src/app/interfaces/interface_client';
import { ClaimService } from 'src/app/services/claim.service';
import { ClientsService } from 'src/app/services/clients.service';
import { ConfirmDialogComponent } from '../question/confirm-dialog/confirm-dialog.component';
import { ClaimDetailsComponent } from './claim-details/claim-details.component';
import { ClaimMessagesComponent } from './claim-messages/claim-messages.component';
import { FilterClaimDialogComponent } from './filter-claim-dialog/filter-claim-dialog.component';

@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.css']
})
export class ClaimComponent implements OnInit {
  clientSelected: number = 0;
  listClients: Array<Client> = [];
  listClaims: Array<DataClaim> = [];
  params: FilterDataClaim = {
    limit: 10,
    offset: 0,
    total: 0,
    status: 'opened'
  };
  pageSizeOptions: number[] = [5, 10, 25, 50];
  
  constructor(
    private clientsService: ClientsService,
    private claimService: ClaimService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.clientsService.listClients()
      .subscribe(clientsList => {
        this.listClients = clientsList;
      })
    })
  }

  getClaims(): void {
    if (this.clientSelected) {
      let anyParam: any = this.params;
      let param = new HttpParams({fromObject: anyParam});
      
      this.claimService.searchClaim(this.clientSelected, param)
      .subscribe((retClaims: DataSearchClaim) => {
        if ('paging' in retClaims) {
          this.params.total = retClaims.paging.total;
          this.params.limit = retClaims.paging.limit;
          this.params.offset = retClaims.paging.offset;
        }

        if ('data' in retClaims && retClaims.data.length > 0)
          this.listClaims = retClaims.data
        else
          this.claimService.openSnackBar('Nada encontrado', 'Ops!');
      })

    } else {
      this.claimService.openSnackBar('Diga-nos o cliente', 'Ops!');
    }
  }

  openFilterDialog(): void {
    this.dialog.open(FilterClaimDialogComponent,
      {
        data: this.params,
        disableClose: true
      }
    ).afterClosed().subscribe((result: FilterDataClaim) => {
        this.params = result;
        this.getClaims();
      });
  }

  openDialogMessages(claim: DataClaim): void {
    this.dialog.open(ClaimMessagesComponent,
      {
        data: {claim: claim, clientId: this.clientSelected},
        disableClose: true
      }
    );
  }

  openDialogDetails(reasonId: string): void {
    this.dialog.open(ClaimDetailsComponent,
      {
        data: {reasonId: reasonId, clientId: this.clientSelected},
        disableClose: true
      }
    );
  }

  sendResolutionCLaim(resolutionId: string, claimId: string): void {
    this.dialog.open(ConfirmDialogComponent, {
      data: true,
      disableClose: true
    }).afterClosed().subscribe((retConfirm: boolean) => {
      if (retConfirm && retConfirm === true)
        this.claimService.postExpectedResolutionsClaim(this.clientSelected, claimId, resolutionId)
        .subscribe((retResolution: Array<ExpectedResolutionsClaim>) => {
          this.getClaims();
        })
    });
  }

  mediation(id: string) {
    this.dialog.open(ConfirmDialogComponent, {
      data: true,
      disableClose: true
    }).afterClosed().subscribe((retConfirm: boolean) => {
      if (retConfirm && retConfirm === true)
        this.claimService.sendMediationClaim(this.clientSelected, id)
        .subscribe(retMediation => {
          this.getClaims();
        });
    });
  }

  acceptReason(claimId: string): void {
    this.dialog.open(ConfirmDialogComponent, {
      data: true,
      disableClose: true
    }).afterClosed().subscribe((retConfirm: boolean) => {
      if (retConfirm && retConfirm === true)
        this.claimService.acceptExpectedResolutionsClaim(this.clientSelected, claimId)
        .subscribe(retMediation => {
          this.getClaims();
        });
    });
  }
}
