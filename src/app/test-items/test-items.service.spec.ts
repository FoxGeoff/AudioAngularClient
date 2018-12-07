import { TestBed, inject } from '@angular/core/testing';

import { TestItemsService } from './test-items.service';

describe('TestItemsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestItemsService]
    });
  });

  it('should be created', inject([TestItemsService], (service: TestItemsService) => {
    expect(service).toBeTruthy();
  }));
});
