import { TemplatePortal } from '@angular/cdk/portal'
import { AfterViewInit, Component, OnInit } from '@angular/core'
import { FormBuilder, FormControl } from '@angular/forms'
import { FormGeneralStyles } from 'src/app/core/models/formGeneralStyles'
import { FormGeneralService } from 'src/app/core/services/form-general.service'
import { PortalBridgeService } from 'src/app/core/services/portal-bridge.service'

@Component({
  selector: 'app-first-section',
  templateUrl: './first-section.component.html',
  styleUrls: ['./first-section.component.scss']
})
export class FirstSectionComponent implements OnInit, AfterViewInit {
  portal: TemplatePortal
  panelOpenState: boolean = false
  styles: FormGeneralStyles = null
  formGeneralStyles = this.fb.group({
    'border': new FormControl<string>(null),
    'fontStyle': new FormControl<string>(null),
    'backgroundColor': new FormControl<string>(null)
  });
  constructor(
    private portalBridge: PortalBridgeService,
    private formStylesService: FormGeneralService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.portalBridge.portal$.subscribe(el => { this.portal = el })
  }

  ngAfterViewInit(): void {
    this.getStyles()
  }

  getStyles(): void {
    this.formGeneralStyles.setValue({ border: null, fontStyle: null, backgroundColor: null, ...this.formStylesService.getStyles() })
  }

  setFormStyles(): void {
    this.formStylesService.setStyles({ ...this.formGeneralStyles.value })
    this.getStyles()
  }
}
