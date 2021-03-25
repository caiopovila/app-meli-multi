import { TestBed } from '@angular/core/testing';

import { IndexGuardGuard } from './index-guard.guard';

describe('IndexGuardGuard', () => {
  let guard: IndexGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IndexGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
