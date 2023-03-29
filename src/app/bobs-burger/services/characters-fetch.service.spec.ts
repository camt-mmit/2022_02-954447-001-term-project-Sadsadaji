import { TestBed } from '@angular/core/testing';

import { CharactersFetchService } from './characters-fetch.service';

describe('CharactersFetchService', () => {
  let service: CharactersFetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharactersFetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
