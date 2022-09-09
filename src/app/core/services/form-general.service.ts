import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'
import { FormGeneralStyles, } from '../models/formGeneralStyles'

@Injectable()
export class FormGeneralService {
  private form: BehaviorSubject<HTMLElement> = new BehaviorSubject<HTMLElement>(null)
  readonly form$: Observable<HTMLElement> = this.form.asObservable()
  constructor() { }

  setActive(el: HTMLElement): void {
    this.form.next(el)
  }

  getStyles(): FormGeneralStyles {
    const active: HTMLElement = this.form.getValue()
    return active && {
      border: window.getComputedStyle(active).border,
      fontStyle: window.getComputedStyle(active).fontStyle,
      backgroundColor: window.getComputedStyle(active).backgroundColor
    }
  }

  setStyles(styles: FormGeneralStyles): void {
    const active: HTMLElement = this.form.getValue()
    const prevStyles:FormGeneralStyles = this.getStyles()
    active && Object.entries(styles).filter(([key, value]) => styles[key] !== prevStyles[key]).forEach(([key, value]) => {
      active.style[key] = value
    })
  }
}
