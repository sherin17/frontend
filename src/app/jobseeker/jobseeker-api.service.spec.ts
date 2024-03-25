import { TestBed } from '@angular/core/testing';

import { JobseekerApiService } from './jobseeker-api.service';

describe('JobseekerApiService', () => {
  let service: JobseekerApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobseekerApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
