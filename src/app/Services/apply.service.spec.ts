import { TestBed } from '@angular/core/testing';

import { ApplyService } from './apply.service';

describe('ApplyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApplyService = TestBed.get(ApplyService);
    expect(service).toBeTruthy();
  });
});
