import { ComponentFixture, TestBed } from '@angular/core/testing'
import { SelectComponent } from './select.component'

fdescribe('SelectComponent', () => {
  let component: SelectComponent
  let fixture: ComponentFixture<SelectComponent>
  let select: HTMLElement
  let options: HTMLOptionElement[]

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectComponent]
    })
      .compileComponents()

    fixture = TestBed.createComponent(SelectComponent)
    component = fixture.componentInstance
    select = fixture.nativeElement.querySelector('select')
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should emit click', () => {
    spyOn(component.setActive, 'emit')
    select.dispatchEvent(new Event('click'))
    expect(component.setActive.emit).toHaveBeenCalledOnceWith(select)
  })

  it('should be disabled', () => {
    component.disabled = true
    fixture.detectChanges()
    expect(select.hasAttribute('disabled')).toBeTrue()
  })

  it('should contain all provided options', () => {
    component.data = ['first', 'second', 'third']
    fixture.detectChanges()
    options = fixture.nativeElement.querySelectorAll('option')
    expect(options.length).toBe(3)
    expect(options[2].value).toBe('third')
  })
})
