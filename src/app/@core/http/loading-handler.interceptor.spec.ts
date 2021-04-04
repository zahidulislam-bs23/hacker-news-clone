import { TestBed } from '@angular/core/testing';

import { LoadingHandlerInterceptor } from './loading-handler.interceptor';

describe('LoadingHandlerInterceptorService', () => {
  let service: LoadingHandlerInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadingHandlerInterceptor);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
