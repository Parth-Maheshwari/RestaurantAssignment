import { TestBed } from '@angular/core/testing';

import { RestlistService } from './restlist.service';

describe('RestlistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestlistService = TestBed.get(RestlistService);
    expect(service).toBeTruthy();
  });
});
