import { TestBed } from '@angular/core/testing';

import { ErrorHandlerInterceptor } from './error-handler.interceptor';

describe('ErrorHandlerInterceptorService', () => {
  let service: ErrorHandlerInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrorHandlerInterceptor);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
