import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MatIconModule } from '@angular/material/icon'

import { EditFieldComponent } from './edit-field.component'

fdescribe('EditFieldComponent', () => {
  let component: EditFieldComponent
  let fixture: ComponentFixture<EditFieldComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditFieldComponent],
      imports: [
        MatIconModule,
      ]
    })
      .compileComponents()

    fixture = TestBed.createComponent(EditFieldComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should emit click', () => {
    spyOn(component.dropped, 'emit')
    const droplist = fixture.nativeElement.querySelector('div')
    droplist.dispatchEvent(new Event('cdkDropListDropped'))
    expect(component.dropped.emit).toHaveBeenCalled()
  })
})
