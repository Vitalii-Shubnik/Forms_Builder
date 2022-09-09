import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ButtonComponent } from './button.component'

fdescribe('ButtonComponent', () => {
  let component: ButtonComponent
  let fixture: ComponentFixture<ButtonComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonComponent]
    })
      .compileComponents()

    fixture = TestBed.createComponent(ButtonComponent)
    component = fixture.componentInstance
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should emit click', () => {
    spyOn(component.setActive, 'emit')
    const button: HTMLElement = fixture.nativeElement.querySelector('button')
    button.dispatchEvent(new Event('click'))
    expect(component.setActive.emit).toHaveBeenCalledOnceWith(button)
  })

  it('should be disabled', () => {
    component.disabled = true
    fixture.detectChanges()
    const button: HTMLElement = fixture.nativeElement.querySelector('button')
    expect(button.hasAttribute('disabled')).toBeTrue()
  })

  it('should display provided value in button', () => {
    const button: HTMLElement = fixture.nativeElement.querySelector('button')

    component.data = 'text'
    fixture.detectChanges()
    expect((button.textContent).trim()).toBe('text')
  })

  it('should display default value in button', () => {
    const button: HTMLElement = fixture.nativeElement.querySelector('button')
    fixture.detectChanges()
    expect((button.textContent).trim()).toBe('Button')
  })
})
