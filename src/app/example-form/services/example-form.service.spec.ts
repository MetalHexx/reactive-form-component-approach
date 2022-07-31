import { TestBed } from '@angular/core/testing';

import { ExampleFormService } from './example-form.service';

describe('ExampleFormService', () => {
  let service: ExampleFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExampleFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
