import { TestBed } from '@angular/core/testing';

import { JQUERYTOKENService } from './jquery-token.service';

describe('JQUERYTOKENService', () => {
  let service: JQUERYTOKENService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JQUERYTOKENService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
