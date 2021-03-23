import { Component } from '@angular/core';
import { LoaderService } from './config/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Meli Multi';

  loading: boolean = false;

  constructor(private loaderService: LoaderService) {
    this.loaderService.isLoading.subscribe((v) => {
      if (this.loading)
        setTimeout(() => {
          this.loading = v;
        }, 1000)
      else
        this.loading = v;
    });
   }
}
