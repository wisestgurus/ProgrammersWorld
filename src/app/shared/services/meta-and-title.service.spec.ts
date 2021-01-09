import { TestBed } from '@angular/core/testing';

import { MetaAndTitleService } from './meta-and-title.service';

describe('MetaAndTitleService', () => {
  let service: MetaAndTitleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MetaAndTitleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
