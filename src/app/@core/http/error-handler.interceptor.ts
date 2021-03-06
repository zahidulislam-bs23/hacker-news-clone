import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Logger } from '../services/logger.service';

const log = new Logger('ErrorHandlerInterceptor');

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next
      .handle(request)
      .pipe(catchError((error) => this.errorHandler(error)));
  }

  private errorHandler(response: HttpEvent<any>): Observable<HttpEvent<any>> {
    log.error('Request error', response);
    throw response;
  }
}
