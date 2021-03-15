import { Component, Input, OnInit } from '@angular/core';
import { Client } from 'src/app/interfaces/interface_client';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-bl-rm-dialog',
  templateUrl: './bl-rm-dialog.component.html',
  styleUrls: ['./bl-rm-dialog.component.css']
})
export class BlRmDialogComponent implements OnInit {

  clientsSelected!: Array<number>;
  @Input() listClients!: Array<Client>;
  
  constructor(
    private questionsService: QuestionsService
  ) { }

  ngOnInit(): void {
  }

  rmBl(userId: any) {
    if(this.clientsSelected) {
      let nInterval = 0;
  
      this.clientsSelected.forEach((client: any) => {
        setTimeout(() => {
          this.questionsService.delQuestionsBlUser(client, userId)
          .subscribe((conf: any) => {
            this.questionsService.openSnackBar(`${'status' in conf ? conf.status : 'Erro'}`);
          })
        }, nInterval)
        nInterval = nInterval + 500;
      });
      setTimeout(() => {
        this.ngOnInit();
      }, nInterval);
    } else
      this.questionsService.openSnackBar(`Selecione o(s) cliente(s)`, 'Erro');
  }
}
