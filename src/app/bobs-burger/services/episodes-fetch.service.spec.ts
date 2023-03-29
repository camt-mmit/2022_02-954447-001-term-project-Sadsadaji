import { TestBed } from '@angular/core/testing';

import { EpisodesFetchService } from './episodes-fetch.service';

describe('EpisodesFetchService', () => {
  let service: EpisodesFetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EpisodesFetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
