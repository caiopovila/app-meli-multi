import { Injectable } from "@angular/core";
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { LoaderService } from './loader.service';

import { Observable } from 'rxjs';
import { ApiConfigService } from "./api-config.service";


@Injectable()
export class Interceptor implements HttpInterceptor {
    private requests: HttpRequest<any>[] = [];

    constructor(
        private loaderService: LoaderService,
        private configAPI: ApiConfigService
    ){ }

    removeRequest(req: HttpRequest<any>) {
        const i = this.requests.indexOf(req);
        if (i >= 0) {
          this.requests.splice(i, 1);
        }
        this.loaderService.isLoading.next(this.requests.length > 0);
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        this.requests.push(req);

        this.loaderService.isLoading.next(true);

        return new Observable((observer: any) => {
            const subscription = next.handle(req)
                .subscribe(
                event => {
                    if (event instanceof HttpResponse) {
                    this.removeRequest(req);
                    observer.next(event);
                    }
                },
                error => {
                    this.configAPI.errorTreatment(error);
                    this.removeRequest(req);
                },
                () => {
                    this.removeRequest(req);
                    observer.complete();
                });

            return () => {
                this.removeRequest(req);
                subscription.unsubscribe();
            };
        });
    }
}