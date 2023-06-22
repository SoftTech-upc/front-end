import { TestBed } from '@angular/core/testing';

import { AgencyReviewService } from './agency-review.service';

describe('AgencyReviewService', () => {
  let service: AgencyReviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgencyReviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
