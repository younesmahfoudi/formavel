import { TestBed } from '@angular/core/testing';

import { SearchScreenService } from './search-screen.service';

describe('SearchScreenService', () => {
  let service: SearchScreenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchScreenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
