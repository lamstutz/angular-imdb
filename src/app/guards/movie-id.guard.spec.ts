import { TestBed } from '@angular/core/testing';

import { MovieIdGuard } from './movie-id.guard';

describe('MovieIdGuard', () => {
  let guard: MovieIdGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MovieIdGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
