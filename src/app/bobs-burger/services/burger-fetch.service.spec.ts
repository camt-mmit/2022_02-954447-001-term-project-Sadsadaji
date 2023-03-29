import { TestBed } from '@angular/core/testing';

import { BurgerFetchService } from './burger-fetch.service';

describe('BurgerFetchService', () => {
  let service: BurgerFetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BurgerFetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
