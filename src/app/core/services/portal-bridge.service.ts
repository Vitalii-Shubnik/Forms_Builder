import { TemplatePortal } from '@angular/cdk/portal'
import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'

@Injectable()
export class PortalBridgeService {
  private activePortal = new Subject<TemplatePortal<HTMLElement>>()
  readonly portal$ = this.activePortal.asObservable()

  setPortal(portal: TemplatePortal<HTMLElement>) {
    this.activePortal.next(portal)
  }
  detachPortal() {
    this.activePortal.unsubscribe()
  }
  constructor() { }
}
