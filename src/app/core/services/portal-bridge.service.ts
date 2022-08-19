import { TemplatePortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortalBridgeService {
  private activePortal = new Subject<TemplatePortal<any>>() 
  readonly portal$ = this.activePortal.asObservable()

  setPortal(portal:TemplatePortal<any>) {
    this.activePortal.next(portal)
  }
  detachPortal(){
    this.activePortal.unsubscribe()
  }
  constructor() { }
}
