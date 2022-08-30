import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable()
export class FormElDraggingService {
  private dragging = new BehaviorSubject<boolean>(false)
  readonly dragging$ = this.dragging.asObservable()
  constructor() { }
  setDragging(state: boolean) {
    this.dragging.next(state)
  }
}
