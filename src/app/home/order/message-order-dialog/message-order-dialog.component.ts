import { HttpParams } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MessagesService } from 'src/app/services/messages.service';


@Component({
  selector: 'app-message-order-dialog',
  templateUrl: './message-order-dialog.component.html',
  styleUrls: ['./message-order-dialog.component.css']
})
export class MessageOrderDialogComponent implements OnInit {
  msg: any;
  att: any;
  clientId: any;
  buyerId: any;
  text: any;
  emailClient: any;
  params: any;
  totalResults: number = 0;
  pageSizeOptions: number[] = [5, 10, 25, 50];

  constructor(
    @Inject(MAT_DIALOG_DATA) public order: any,
    private msgService: MessagesService
  ) { }

  ngOnInit(): void {
    this.clientId = this.order.seller.id;
    this.buyerId = this.order.buyer.id;
    this.emailClient = this.order.seller.email;
    this.params.offset = 0;
    this.params.limit = 20;

    setTimeout(() => {
      this.getMsg();
    })
  }

  getMsg() {
    if (this.order.pack_id) {
      let param = new HttpParams({fromObject: this.params});
      this.msgService.getMessages(this.order, param)
      .subscribe((retMsgs: any) => {
        this.msg = retMsgs.msg ? retMsgs.msg : '';

        this.params.offset = retMsgs.paging.offset;
        this.totalResults = retMsgs.paging.total;
        this.params.limit = retMsgs.paging.limit;
      })
    }
  }

  getAttachments(message: any) {
    window.location.href = `${this.msgService.getUrlApi()}/msg/attachments/${message.message_attachments.filename}/${message.id}`
  }

  postMessage(path: any) {
    if (this.text) {
      let body = {
        text: this.text,
        user: {
          user_id: this.clientId,
          email: this.emailClient
        },
        buyer: this.buyerId,
        path: path
      };
      this.msgService.postMessage(body)
      .subscribe((retPost: any) => {
        if (retPost.error)
          this.msgService.openSnackBar(retPost.message || '', retPost.error);
        else
          this.ngOnInit();
      })
    } else
        this.msgService.openSnackBar('Digite algo!', 'Erro');
  }
}
