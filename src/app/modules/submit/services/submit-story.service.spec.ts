import { TestBed } from '@angular/core/testing';

import { SubmitStoryService } from './submit-story.service';

describe('SubmitStoryService', () => {
  let service: SubmitStoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubmitStoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
