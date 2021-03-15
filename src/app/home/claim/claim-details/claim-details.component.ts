import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DetailClaim } from 'src/app/interfaces/interface_claim';
import { ClaimService } from 'src/app/services/claim.service';

@Component({
  selector: 'app-claim-details',
  templateUrl: './claim-details.component.html',
  styleUrls: ['./claim-details.component.css']
})
export class ClaimDetailsComponent implements OnInit {

  details!: DetailClaim;

  constructor(
    @Inject(MAT_DIALOG_DATA) public claim: {clientId: number, reasonId: string},
    private serviceClaim: ClaimService
    ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.serviceClaim.getDetailClaim(this.claim.clientId, this.claim.reasonId)
      .subscribe(retDetail => {
        this.details = retDetail;
      })
    })
  }

}
