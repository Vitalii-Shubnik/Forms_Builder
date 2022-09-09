import { CdkPortal, PortalModule } from '@angular/cdk/portal'
import { Component, ViewChild } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { PortalBridgeService } from './portal-bridge.service'

@Component({
  selector: 'app-second-section',
  template: '<ng-template cdkPortal>Portal</ng-template>',
})
class PortalComponent {
  @ViewChild(CdkPortal)
  portalContent: CdkPortal
}

fdescribe('PortalBridgeService', () => {
  let service: PortalBridgeService
  let fixture: ComponentFixture<PortalComponent>
  let component: PortalComponent
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortalComponent],
      imports: [
        PortalModule,
      ],
      providers: [
        PortalBridgeService,
      ]
    }).compileComponents()
    service = TestBed.inject(PortalBridgeService)
    fixture = TestBed.createComponent(PortalComponent)
    component = fixture.componentInstance
  })

  it('should add new TemplatePortal', () => {
    service.setPortal(component.portalContent)
    service.portal$.subscribe(el => {
      expect(el).toEqual(component.portalContent)
    })
  })

  it('should unsubscribe', () => {
    spyOn(service['activePortal'], 'unsubscribe')
    service.detachPortal()
    expect(service['activePortal'].unsubscribe).toHaveBeenCalledTimes(1)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
