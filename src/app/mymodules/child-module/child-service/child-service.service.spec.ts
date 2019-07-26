import { TestBed } from '@angular/core/testing';

import { ExampleServiceService } from './child-service.service';

describe('ExampleServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExampleServiceService = TestBed.get(ExampleServiceService);
    expect(service).toBeTruthy();
  });
});
