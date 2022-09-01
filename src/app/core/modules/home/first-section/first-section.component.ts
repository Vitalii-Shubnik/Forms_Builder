import { TemplatePortal } from '@angular/cdk/portal'
import { AfterViewInit, Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { FormGeneralStyles } from 'src/app/core/models/formGeneralStyles'
import { FormGeneralService } from 'src/app/core/services/form-general.service'
import { PortalBridgeService } from 'src/app/core/services/portal-bridge.service'

@Component({
  selector: 'app-first-section',
  templateUrl: './first-section.component.html',
  styleUrls: ['./first-section.component.scss']
})
export class FirstSectionComponent implements OnInit, AfterViewInit {
  portal$: Observable<TemplatePortal>
  panelOpenState: boolean = false
  styles: FormGeneralStyles = null

  constructor(
    private portalBridge: PortalBridgeService,
    private formStylesService: FormGeneralService
  ) { }

  ngOnInit(): void {
    this.portal$ = this.portalBridge.portal$
  }

  ngAfterViewInit() {
    this.styles = this.formStylesService.getStyles()
  }

  setFormStyles() {
    this.formStylesService.setStyles(this.styles)
    this.styles = this.formStylesService.getStyles()
  }
}
