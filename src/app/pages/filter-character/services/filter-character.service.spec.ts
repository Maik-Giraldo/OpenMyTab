import { TestBed } from '@angular/core/testing';

import { FilterCharacterService } from './filter-character.service';

describe('FilterCharacterService', () => {
  let service: FilterCharacterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterCharacterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
