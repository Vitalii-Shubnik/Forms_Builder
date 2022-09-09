import { TestBed } from '@angular/core/testing'
import { TestScheduler } from 'rxjs/testing'

import { FormGeneralService } from './form-general.service'

fdescribe('FormGeneralService', () => {
  let service: FormGeneralService
  let testScheduler: TestScheduler
  let element: HTMLElement
  let mockWindow: any
  beforeEach(() => {
    mockWindow = jasmine.createSpyObj('window', ['getComputedStyle'])
    TestBed.configureTestingModule({
      providers: [
        FormGeneralService,
        { provide: Window, useValue: mockWindow }
      ]
    })
    service = TestBed.inject(FormGeneralService)
    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected)
    })
    element = document.createElement('form')
  })

  it('should set new value to observable', () => {
    service.setActive(element)
    service.form$.subscribe(value => {
      expect(value).toBe(element)
    })
  })

  it('should return falsy value when there is no active element', () => {
    expect(service.getStyles()).toBeFalsy()
  })

  it('should return form backgroundColor, fontStyle and border', () => {
    const form = document.createElement('form')
    service.setActive(form)
    service.setStyles({ backgroundColor: 'rgb(60, 120, 180)', border: '1px solid black', fontStyle: 'normal' })
    expect([form.style['backgroundColor'], form.style['border'], form.style['fontStyle']]).toEqual(['rgb(60, 120, 180)', '1px solid black', 'normal'])
    service.setStyles({ backgroundColor: 'rgb(10, 20, 80)', border: '3px dashed black', fontStyle: 'italic' })
    expect([form.style['backgroundColor'], form.style['border'], form.style['fontStyle']]).toEqual(['rgb(10, 20, 80)', '3px dashed black', 'italic'])
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
