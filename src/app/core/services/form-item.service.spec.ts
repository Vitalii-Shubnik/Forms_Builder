import { TestBed } from '@angular/core/testing'
import { ElementStyles } from 'src/app/shared/statesModels/elementStyles.state'
import { AvailableItems } from '../enums/availableItem'
import { FormItemService } from './form-item.service'

fdescribe('FormItemService', () => {
  let service: FormItemService
  let mockWindow: Window
  beforeEach(() => {
    mockWindow = jasmine.createSpyObj('Window', ['getComputedStyle'])
    TestBed.configureTestingModule({
      providers: [
        FormItemService,
        { provide: Window, useValue: mockWindow }
      ]
    })
    service = TestBed.inject(FormItemService)
  })

  it('should set active element', () => {
    const button: HTMLButtonElement = document.createElement('button')
    service.setActive({ type: AvailableItems.button, element: button })
    service.element$.subscribe(el => {
      expect(el).toEqual({ type: AvailableItems.button, element: button })
    })
  })

  it('should return styles of checkbox', () => {
    const stylesCheckBox: ElementStyles = {
      width: '200px',
      height: '100px',
      required: true,
    }
    const checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox')
    const checkboxStyles = {
      ...stylesCheckBox,
    }
    spyOn(service, 'getCheckboxStyles').and.returnValue(checkboxStyles)
    service.setActive({ type: AvailableItems.checkbox, element: checkbox })
    expect(service.getStyles()).toEqual(checkboxStyles)
  })

  it('should return styles of button and select', () => {
    const stylesSelect: ElementStyles = {
      width: '200px',
      height: '100px',
      fontSize: '14px',
      fontWeight: '600',
      color: 'rgb(255,0,0)',
      borderStyle: '1px solid black',
    }
    const button = document.createElement('button')
    const select = document.createElement('select')
    const buttonStyles = {
      ...stylesSelect,
    }
    const selectStyles = { ...buttonStyles }
    spyOn(service, 'getSelectStyles').and.returnValue(buttonStyles)
    service.setActive({ type: AvailableItems.button, element: button })
    expect(service.getStyles()).toEqual(buttonStyles)
    service.setActive({ type: AvailableItems.select, element: select })
    expect(service.getStyles()).toEqual(selectStyles)
  })

  it('should return styles of input and textarea', () => {
    const stylesFull: ElementStyles = {
      width: '200px',
      height: '100px',
      fontSize: '14px',
      fontWeight: '600',
      color: 'rgb(255,0,0)',
      borderStyle: '1px solid black',
      required: true,
      placeholder: ''
    }
    const input = document.createElement('input')
    const textarea = document.createElement('textarea')
    const inputStyles = { ...stylesFull }
    const textareaStyles = { ...stylesFull }
    spyOn(service, 'getInputStyles').and.returnValue(inputStyles)
    expect(service.getStyles()).toBeFalsy()
    service.setActive({ type: AvailableItems.input, element: input })
    expect(service.getStyles()).toEqual(inputStyles)
    service.setActive({ type: AvailableItems.textarea, element: textarea })
    expect(service.getStyles()).toEqual(textareaStyles)
  })

  it('should set styles to active element', () => {
    const button = document.createElement('button')
    service.setStyles({ color: 'red', width: '40px' })
    expect([button.style['color'], button.style['width']]).toEqual(['', ''])
    service.setActive({ type: AvailableItems.button, element: button })
    service.setStyles({ color: 'red', width: '40px' })
    expect([button.style['color'], button.style['width']]).toEqual(['red', '40px'])

    service.setStyles({ height: '70px', width: '20px' })
    expect([button.style['color'], button.style['width'], button.style['height']]).toEqual(['red', '20px', '70px'])

    service.setStyles({ height: '', width: '' })
    expect([button.style['color'], button.style['width'], button.style['height']]).toEqual(['red', '', ''])

    const input = document.createElement('input')
    service.setActive({ type: AvailableItems.input, element: input })
    service.setStyles({ required: true, placeholder: '123' })
    expect([input.getAttribute('required'), input.getAttribute('placeholder')]).toEqual(['true', '123'])
    service.setStyles({ required: false, placeholder: '' })
    expect([input.getAttribute('required'), input.getAttribute('placeholder')]).toEqual([null, ''])
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
