import { Component, OnInit } from '@angular/core';
import { Sites } from 'src/app/interfaces/interface_sites';
import { ValidationOk } from 'src/app/interfaces/interface_validation';
import { InfoService } from 'src/app/services/info.service';

@Component({
  selector: 'app-accont',
  templateUrl: './accont.component.html',
  styleUrls: ['./accont.component.css']
})
export class AccontComponent implements OnInit {

  siteId: string = '';
  listSite: Array<Sites> = [];

  constructor(
    private infoService: InfoService
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.infoService.listSites().subscribe((retList: any) => {
        if(retList.list)
          this.listSite = retList.list;

        if(retList.siteId)
          this.siteId = retList.siteId;
      })
    })
  }

  setSiteId() {
    this.infoService.postSiteId(this.siteId).subscribe((ret: ValidationOk) => {
      this.infoService.openSnackBar('alteração: ', ret && ret.S ? ret.S : 'Erro')
    })
  }
}
