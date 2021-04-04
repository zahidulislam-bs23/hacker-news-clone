import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { LoadingService } from '../services/loading.service';

@Injectable({
  providedIn: 'root',
})
export class LoadingHandlerInterceptor implements HttpInterceptor {
  private totalRequests = 0;
  constructor(private loadingService: LoadingService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    this.totalRequests++;
    if (this.totalRequests === 1) {
      this.loadingService.showLoader();
    }
    return next.handle(request).pipe(
      finalize(() => {
        this.totalRequests--;
        if (this.totalRequests === 0) {
          this.loadingService.dismissLoader();
        }
      })
    );
  }
}
