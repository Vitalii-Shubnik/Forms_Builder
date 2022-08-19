import { TemplatePortal, ComponentPortal } from '@angular/cdk/portal';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { PortalBridgeService } from 'src/app/core/services/portal-bridge.service';

@Component({
  selector: 'app-first-section',
  templateUrl: './first-section.component.html',
  styleUrls: ['./first-section.component.scss']
})
export class FirstSectionComponent implements OnInit{

  portal$: Observable<TemplatePortal>
  panelOpenState: boolean = false
  constructor(
    private portalBridge: PortalBridgeService
  ) { }

  ngOnInit(): void {
    this.portal$ = this.portalBridge.portal$
  }
}
