import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FormGeneralStyles } from '../models/formGeneralStyles';

@Injectable()
export class FormGeneralService {
  private form = new BehaviorSubject<HTMLElement>(null)
  readonly form$ = this.form.asObservable()
  constructor() { }

  setActive(el: HTMLElement) {
    this.form.next(el)
  }

  getStyles(): FormGeneralStyles {
    const active = this.form.getValue()
    return active && {
      border: window.getComputedStyle(active).border,
      fontStyle: window.getComputedStyle(active).fontStyle,
      backgroundColor: window.getComputedStyle(active).backgroundColor
    }
  }

  setStyles(styles: FormGeneralStyles) {
    const active = this.form.getValue()
    const prevStyles = this.getStyles()
    active && Object.entries(styles).filter(([key, value]) => styles[key] !== prevStyles[key]).forEach(([key, value]) => {
      active.style[key] = value
    })
  }
}
