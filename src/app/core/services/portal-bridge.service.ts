import { TemplatePortal } from '@angular/cdk/portal'
import { Injectable } from '@angular/core'
import { BehaviorSubject, ReplaySubject } from 'rxjs'

@Injectable()
export class PortalBridgeService {
  private activePortal = new ReplaySubject<TemplatePortal<any>>(2)
  readonly portal$ = this.activePortal.asObservable()

  setPortal(portal: TemplatePortal<any>) {
    this.activePortal.next(portal)
  }
  detachPortal() {
    this.activePortal.unsubscribe()
  }
  constructor() { }
}
