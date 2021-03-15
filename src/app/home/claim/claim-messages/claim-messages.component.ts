import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataClaim, MessageClaim, PostMessageClaim } from 'src/app/interfaces/interface_claim';
import { ClaimService } from 'src/app/services/claim.service';

@Component({
  selector: 'app-claim-messages',
  templateUrl: './claim-messages.component.html',
  styleUrls: ['./claim-messages.component.css']
})
export class ClaimMessagesComponent implements OnInit {

  messages!: Array<MessageClaim>;
  message!: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public claim: {clientId: number, claim: DataClaim},
    private serviceClaim: ClaimService
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.serviceClaim.messagesClaim(this.claim.clientId, this.claim.claim.id)
      .subscribe((retMessages: Array<MessageClaim>) => {
        this.messages = retMessages;
      })
    })
  }

  postMessage(): void {
    let body: PostMessageClaim = {
      receiver_role: this.claim.claim.stage === 'dispute' ? 'mediator' : 'complainant',
      message: this.message
    };
    this.serviceClaim.postMessagesClaim(this.claim.clientId, this.claim.claim.id, body)
    .subscribe(retPost => { if('id' in retPost) this.ngOnInit() })
  }

  dowloadAtt(id: string): void {
    window.location.href = `${this.serviceClaim.getUrlApi()}/messages/attachments/download/${this.claim.clientId}/${this.claim.claim.id}/${id}`;
  }
}
