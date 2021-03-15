import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ClientsService } from 'src/app/services/clients.service';
import { QuestionsService } from 'src/app/services/questions.service';
import { AswerDialogComponent } from '../aswer-dialog/aswer-dialog.component';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-question-view',
  templateUrl: './question-view.component.html',
  styleUrls: ['./question-view.component.css']
})
export class QuestionViewComponent implements OnInit {
  UNANSWERED = "UNANSWERED";
  @Input() question: any;
  @Input() clientSelected: any;

  constructor(
    private clientsService: ClientsService,
    private questionService: QuestionsService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  delQuestion(questionId: number) {
    this.dialog.open(ConfirmDialogComponent, {
      data: true,
      disableClose: true
    }).afterClosed().subscribe(retConfirm => {
      if (retConfirm && retConfirm === true)
        this.questionService.deleteQuestion(this.clientSelected, questionId)
        .subscribe((ret: any) => {
          if (ret && ret[0]) {
            this.clientsService.openSnackBar(ret[0], 'Ok');
            setTimeout(() => {
              this.ngOnInit();
            }, 1000);
          }else
            this.clientsService.openSnackBar('Deleção falhou', 'Erro')
        })
    })
  }

  answerQuestion(questionId: number) {
    this.dialog.open(AswerDialogComponent, {
      data: '',
      disableClose: true
    }).afterClosed().subscribe(retText => {
      if (retText)
        this.questionService.answerQuestion(retText, this.clientSelected, questionId)
        .subscribe((ret: any) => {
          if (ret.id) {
            this.clientsService.openSnackBar('Postagem enviada', 'Ok');
            setTimeout(() => { 
              this.ngOnInit();
            }, 1000);
          }
          else
            this.clientsService.openSnackBar('Postagem falhou', 'Erro');
        })
    })
  }
}
