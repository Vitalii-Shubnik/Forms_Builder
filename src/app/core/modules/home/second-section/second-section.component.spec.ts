import { Component, EventEmitter, Output } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { FormBuilder } from '@angular/forms'
import { Store } from '@ngrx/store'
import { of } from 'rxjs'
import { AvailableItems } from 'src/app/core/enums/availableItem'
import { FormItemService } from 'src/app/core/services/form-item.service'
import { PortalBridgeService } from 'src/app/core/services/portal-bridge.service'
import { SecondSectionComponent } from './second-section.component'


@Component({
  selector: 'app-main-form',
  template: 'Form'
})
class FormComponent { }

@Component({
  selector: 'app-edit-fields',
  template: 'Edit-fields'
})
class EditFieldsComponent {
  @Output() removed = new EventEmitter()
}

fdescribe('SecondSectionComponent', () => {
  let component: SecondSectionComponent
  let fixture: ComponentFixture<SecondSectionComponent>
  let mockFormItemService: any
  let mockPortalBridge: any
  let mockStore: any
  const initial = {
    height: null,
    width: null,
    fontWeight: null,
    fontSize: null,
    color: null,
    borderStyle: null,
    required: null,
    placeholder: null
  }
  beforeEach(async () => {
    mockFormItemService = jasmine.createSpyObj(FormItemService, ['setActive', 'getStyles', 'element$'])
    mockPortalBridge = jasmine.createSpyObj(PortalBridgeService, ['setPortal'])
    mockStore = jasmine.createSpyObj(Store, ['select', 'dispatch'])

    await TestBed.configureTestingModule({
      declarations: [
        SecondSectionComponent,
        FormComponent,
        EditFieldsComponent
      ],
      providers: [
        FormBuilder,
        { provide: FormItemService, useValue: mockFormItemService },
        { provide: PortalBridgeService, useValue: mockPortalBridge },
        { provide: Store, useValue: mockStore },
      ]
    })
      .compileComponents()

    fixture = TestBed.createComponent(SecondSectionComponent)
    component = fixture.componentInstance
    component.activeItem$ = of({ type: AvailableItems.checkbox, element: document.createElement('input') })
    component.activeElementStyles$ = of({ height: '100px', width: '50px' })
    fixture.detectChanges()
  })

  xit('should dispatch get styles', () => {
    // const action = ElementActions.elementChangeStyles({styles: {height:'100px', width:'150px'}})
    component.getElementCurrentStyleValues()
    // const result = mockFormItemService.getStyles.and.returnValue({height:'100px', width:'150px'})
    expect(mockStore.dispatch).toHaveBeenCalled()
    expect(mockFormItemService.getStyles).toHaveBeenCalled()
  })

  xit('should dispatch set styles', () => {
    component.formStyles.setValue({ ...initial, height: '100px', width: '150px' })
    component.setElementCurrentStyleValues()
    // spyOn(component, 'getElementCurrentStyleValues')
    expect(mockStore.dispatch).toHaveBeenCalled()
  })

  it('should remove styles', () => {
    component.onRemoved()
    expect(component.formStyles.value).toEqual({...initial})
    expect(component.previousStyles).toEqual({})
    expect(mockFormItemService.setActive).toHaveBeenCalledOnceWith(null)
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
