import { TemplatePortal } from '@angular/cdk/portal'
import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable()
export class PortalBridgeService {
  private activePortal = new BehaviorSubject<TemplatePortal<any>>(null)
  readonly portal$ = this.activePortal.asObservable()

  setPortal(portal: TemplatePortal<any>) {
    this.activePortal.next(portal)
  }
  detachPortal() {
    this.activePortal.unsubscribe()
  }
  constructor() { }
}
