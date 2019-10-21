import { TestBed } from '@angular/core/testing';

import { AppRestServiceService } from './app-rest-service.service';

describe('AppRestServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppRestServiceService = TestBed.get(AppRestServiceService);
    expect(service).toBeTruthy();
  });
});
