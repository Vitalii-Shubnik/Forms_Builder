import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormItemService {
  private activeElement = new Subject<HTMLElement>()
  readonly element$ = this.activeElement.asObservable()

  setActiveElement(element: HTMLElement) {
    this.activeElement.next(element)
  }
  
  constructor() { }
}
