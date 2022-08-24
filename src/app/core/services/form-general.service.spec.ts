import { TestBed } from '@angular/core/testing';

import { FormGeneralService } from './form-general.service';

describe('FormGeneralService', () => {
  let service: FormGeneralService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormGeneralService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
