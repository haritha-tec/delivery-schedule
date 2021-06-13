import { TestBed } from '@angular/core/testing';

import { LocalstorageRefService } from './localstorage-ref.service';

describe('LocalstorageRefService', () => {
  let service: LocalstorageRefService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalstorageRefService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
