import { TestBed } from '@angular/core/testing';

import { CompservService } from './compserv.service';

describe('CompservService', () => {
  let service: CompservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
