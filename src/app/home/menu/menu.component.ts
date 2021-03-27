import { Component, OnChanges, OnInit } from '@angular/core';
import { MessagesNotification } from 'src/app/interfaces/interface_notification';
import { InfoService } from 'src/app/services/info.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, OnChanges {
  title: string = 'Meli Multi';

  links = [
    {link: './', name: 'Início', icon: 'home'},
    {link: './sales', name: 'Vendas', icon: 'point_of_sale'},
    {link: './claim', name: 'Reclamações', icon: 'feedback'},
    {link: './questions', name: 'Perguntas', icon: 'question_answer'},
    {link: './items', name: 'Anúncios', icon: 'feed'},
    {link: './sellers', name: 'Monitoramento', icon: 'legend_toggle'},
//     {link: './pricing', name: 'Precificação', icon: 'price_change'},
    {link: './config', name: 'Configurações', icon: 'manage_accounts'}
  ]

  listNotification!: Array<MessagesNotification>;

  constructor(
    private serviceLogin: LoginService,
    private infoService: InfoService
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.getNotification();
    })
  }

  ngOnChanges() {
    setTimeout(() => {
      this.getNotification();
    })
  }

  exit() {
    this.serviceLogin.exitUser().subscribe((ret: any) => {
      if (ret.S) {
        sessionStorage.clear();
        this.serviceLogin.route.navigate(['/']);
      }
    });
  }

  getNotification() {
    this.infoService.getNotifications().subscribe((retNotf: Array<MessagesNotification> | any) => {
      if (retNotf && retNotf.length > 0)
        this.listNotification = retNotf;
    })
  }
}
