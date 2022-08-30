import { CdkPortal, PortalModule } from '@angular/cdk/portal'
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MatExpansionModule } from '@angular/material/expansion'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import { LetModule } from '@ngrx/component'
import { of } from 'rxjs'
import { FormGeneralService } from 'src/app/core/services/form-general.service'
import { PortalBridgeService } from 'src/app/core/services/portal-bridge.service'
import { FirstSectionComponent } from './first-section.component'

@Component({
  template: '<ng-template cdkPortal><p>Mock Portal</p></ng-template>'
})
class mockTemplatePortalComponent {
  @ViewChild(CdkPortal)
  portalContent: CdkPortal
}

@Component({
  selector: 'app-form-general-styles',
  template: '<p>Mock Styles</p>'
})
class mockStylesComponent {
  @Input() styles: any
  @Output() stylesChanged = new EventEmitter()
}

xdescribe('FirstSectionComponent', () => {
  let component: FirstSectionComponent
  let fixture: ComponentFixture<FirstSectionComponent>
  let fixtureSecond: ComponentFixture<mockTemplatePortalComponent>

  let mockPortalBridge: any
  let mockformStylesService: any

  beforeEach(async () => {
    mockPortalBridge = jasmine.createSpyObj(PortalBridgeService, ['portal$'])
    mockformStylesService = jasmine.createSpyObj(FormGeneralService, ['getStyles', 'setStyles'])

    await TestBed.configureTestingModule({
      declarations: [
        FirstSectionComponent,
        mockTemplatePortalComponent,
        mockStylesComponent
      ],
      imports: [
        NoopAnimationsModule,
        PortalModule,
        MatExpansionModule,
        LetModule,
      ],
      providers: [
        { provide: PortalBridgeService, useValue: mockPortalBridge },
        { provide: FormGeneralService, useValue: mockformStylesService }
      ]
    })
      .compileComponents()

    fixture = TestBed.createComponent(FirstSectionComponent)
    fixtureSecond = TestBed.createComponent(mockTemplatePortalComponent)

    component = fixture.componentInstance
    component.portal$ = of(fixtureSecond.componentInstance.portalContent)
    mockformStylesService.getStyles.and.returnValue({ backgroundColor: 'rgb(0,0,0)', border: '1px solid black', fontStyle: 'normal' })
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
