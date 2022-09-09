import { TestBed } from '@angular/core/testing'

import { FormElDraggingService } from './form-el-dragging.service'

fdescribe('FormElDraggingService', () => {
  let service: FormElDraggingService

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormElDraggingService]
    })
    service = TestBed.inject(FormElDraggingService)

  })

  it('should set new value to observable', () => {
    service.setDragging(true)
    service.dragging$.subscribe(value => {
      expect(value).toBe(true)
    })
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
