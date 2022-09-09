import { CdkDragDrop } from '@angular/cdk/drag-drop'
import { Component, EventEmitter, Input, Output } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { AvailableItems } from 'src/app/core/enums/availableItem'
import { ActiveElement } from 'src/app/core/models/activeElement'
import { DropListElementData } from 'src/app/core/models/dropListElementData'
import { FormElDraggingService } from 'src/app/core/services/form-el-dragging.service'
import { FormGeneralService } from 'src/app/core/services/form-general.service'
import { FormItemService } from 'src/app/core/services/form-item.service'
import { MainFormComponent } from './main-form.component'

@Component({
  selector: 'app-droplist',
  template: '<p>Droplist mock</p>'
})
class DroplistMockComponent {
  @Input() disabled: boolean = false
  @Input() dropListData: DropListElementData[] = []
  @Input() formClass: string = 'default-form'
  @Input() noReturnPredicate = () => true
  @Input() dragHandle: boolean = false
  @Output() SetActive = new EventEmitter<ActiveElement>()
  @Output() SetDropped = new EventEmitter<CdkDragDrop<DropListElementData[]>>()
  @Output() dragEvent = new EventEmitter<boolean>()
  @Output() mainformInit = new EventEmitter<HTMLElement>()
}

fdescribe('MainFormComponent', () => {
  let component: MainFormComponent
  let fixture: ComponentFixture<MainFormComponent>
  let mockFormGeneralService: FormGeneralService
  let mockFormItemService: FormItemService
  let mockFormElDraggingService: FormElDraggingService

  beforeEach(async () => {
    mockFormItemService = jasmine.createSpyObj(FormItemService, ['setActive'])
    mockFormGeneralService = jasmine.createSpyObj(FormGeneralService, ['setActive'])
    mockFormElDraggingService = jasmine.createSpyObj(FormElDraggingService, ['setDragging'])

    await TestBed.configureTestingModule({
      declarations: [MainFormComponent, DroplistMockComponent],
      providers: [
        { provide: FormGeneralService, useValue: mockFormGeneralService },
        { provide: FormItemService, useValue: mockFormItemService },
        { provide: FormElDraggingService, useValue: mockFormElDraggingService }
      ]
    })
      .compileComponents()

    fixture = TestBed.createComponent(MainFormComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should call setActive of FormItemService', () => {
    const element: ActiveElement = { type: AvailableItems.input, element: document.createElement('input') }
    component.setActive(element)
    expect(mockFormItemService.setActive).toHaveBeenCalledOnceWith(element)
  })

  it('should call setActive of FormGeneralService', () => {
    const element = document.createElement('form')
    component.setMainForm(element)
    expect(mockFormGeneralService.setActive).toHaveBeenCalledOnceWith(element)
  })

  it('should call setDragging of FormElDraggingService', () => {
    component.setDragging(true)
    expect(mockFormElDraggingService.setDragging).toHaveBeenCalledOnceWith(true)
  })

  xit('it should transform ondrop', () => {
    pending()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})