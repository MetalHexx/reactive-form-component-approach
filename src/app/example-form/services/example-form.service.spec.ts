import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { ExampleFormService } from './example-form.service';

describe('ExampleFormService', () => {
  let service: ExampleFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ]
    });
    service = TestBed.inject(ExampleFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
