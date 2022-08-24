import { TestBed } from '@angular/core/testing';

import { FormElDraggingService } from './form-el-dragging.service';

describe('FormElDraggingService', () => {
  let service: FormElDraggingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormElDraggingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
