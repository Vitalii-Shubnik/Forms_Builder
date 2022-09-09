import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'

@Injectable()
export class FormElDraggingService {
  private dragging: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  readonly dragging$: Observable<boolean> = this.dragging.asObservable()
  constructor() { }
  setDragging(state: boolean): void {
    this.dragging.next(state)
  }
}
