import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Client } from 'src/app/interfaces/interface_client';
import { BlackListQuestion } from 'src/app/interfaces/interface_questions';
import { QuestionsService } from 'src/app/services/questions.service';
import { ConfirmDialogComponent } from '../../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-bl-list-dialog',
  templateUrl: './bl-list-dialog.component.html',
  styleUrls: ['./bl-list-dialog.component.css']
})
export class BlListDialogComponent implements OnInit {

  clientSelected!: number;
  @Input() listClients!: Array<Client>;
  list!: Array<{id: number}>;
  
  constructor(
    private questionsService: QuestionsService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.list = [];
  }

  getBl() {
    if(this.clientSelected) {
      this.questionsService.getBlQuestionsClient(this.clientSelected)
      .subscribe((retList: BlackListQuestion | any) => {
        if ('users' in retList) 
          this.list = retList.users;
      })
    } else
      this.list = [];
  }

  delBl(userId: number) {
    if(this.clientSelected) {
      this.dialog.open(ConfirmDialogComponent, {
        data: true,
        disableClose: true
      }).afterClosed().subscribe(retConfirm => {
        if (retConfirm && retConfirm === true)
          this.questionsService.delQuestionsBlUser(this.clientSelected, userId)
          .subscribe((retList: any) => {
            this.questionsService.openSnackBar(`${'status' in retList ? retList.status : 'Erro'}`);
        })
      })
    }
  }
}
