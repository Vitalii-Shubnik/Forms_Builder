import { TemplatePortal, ComponentPortal } from '@angular/cdk/portal';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PortalBridgeService } from 'src/app/core/services/portal-bridge.service';

@Component({
  selector: 'app-first-section',
  templateUrl: './first-section.component.html',
  styleUrls: ['./first-section.component.scss']
})
export class FirstSectionComponent implements OnInit {

  portal$: Observable<TemplatePortal>
  panelOpenState: boolean = false
  constructor(
    private portalBridge: PortalBridgeService
  ) { }

  ngOnInit(): void {
    this.portal$ = this.portalBridge.portal$
  }

}
