import { Portal, ComponentPortal, TemplatePortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortalBridgeService {
  private activePortal = new Subject<TemplatePortal<any>>() // ComponentPortal<any> |
  readonly portal$ = this.activePortal.asObservable()

  setPortal(portal:TemplatePortal<any>) {
    this.activePortal.next(portal)
  }
  
  constructor() { }
}
