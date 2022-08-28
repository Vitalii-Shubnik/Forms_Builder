import { TestBed } from '@angular/core/testing';
import { TestScheduler } from 'rxjs/testing';

import { FormGeneralService } from './form-general.service';

fdescribe('FormGeneralService', () => {
  let service: FormGeneralService;
  let testScheduler: TestScheduler
  let element: HTMLElement
  let mockWindow: any;
  beforeEach(() => {
    mockWindow = jasmine.createSpyObj('window', ['getComputedStyle'])
    TestBed.configureTestingModule({
      providers: [
        FormGeneralService,
        { provide: Window, useValue: mockWindow }
      ]
    });
    service = TestBed.inject(FormGeneralService);
    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected)
    })
    element = document.createElement('form')
  });

  it('should set new value to observable', () => {
    service.setActive(element)
    service.form$.subscribe(value => {
      expect(value).toBe(element)
    })
  })

  //getStyles
  it('should return falsy value when there is no active element', () => {
    expect(service.getStyles()).toBeFalsy()
  })

  // it('should return form backgroundColor, fontStyle and border', () => {
  //   element.style['backgroundColor'] = 'black'
  //   element.style['border'] = '1px solid red'
  //   element.style['fontStyle'] = 'italic'
  //   service.setActive(element)
  //   service.form$.subscribe(value => {
  //     mockWindow.getComputedStyle.and.returnValue({
  //       border: '1px solid red',
  //       fontStyle: 'italic',
  //       backgroundColor: 'black',
  //       something: '123'
  //     })
  //     const result = service.getStyles()
  //     console.log(result)
  //     expect(result).toEqual({
  //       border: '1px solid red',
  //       fontStyle: 'italic',
  //       backgroundColor: 'black'
  //     })
  //   })
  // })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
