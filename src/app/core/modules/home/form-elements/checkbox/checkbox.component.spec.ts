import { ComponentFixture, TestBed } from '@angular/core/testing'
import { CheckboxComponent } from './checkbox.component'

fdescribe('CheckboxComponent', () => {
  let component: CheckboxComponent
  let fixture: ComponentFixture<CheckboxComponent>
  let input: HTMLElement
  let label

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CheckboxComponent]
    })
      .compileComponents()

    fixture = TestBed.createComponent(CheckboxComponent)
    component = fixture.componentInstance
    input = fixture.nativeElement.querySelector('input')
    label = fixture.nativeElement.querySelector('label')
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
  
  it('should emit click', () => {
    spyOn(component.setActive, 'emit')
    input.dispatchEvent(new Event('click'))
    expect(component.setActive.emit).toHaveBeenCalledOnceWith(input)
  })

  it('should be disabled', () => {
    component.disabled = true
    fixture.detectChanges()
    expect(input.hasAttribute('disabled')).toBeTrue()
  })

  it('should display provided value in button', () => {
    component.data = 'text'
    fixture.detectChanges()
    expect((label.innerHTML).trim()).toBe('text')
  })

  it('should display default value in button', () => {
    fixture.detectChanges()
    expect((label.innerHTML).trim()).toBe('Label')
  })
})
