import { TestBed } from '@angular/core/testing';

import { RecruteurService } from './recruteur.service';

describe('RecruteurService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecruteurService = TestBed.get(RecruteurService);
    expect(service).toBeTruthy();
  });
});
