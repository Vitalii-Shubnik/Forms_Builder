import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ElementStyles } from 'src/app/shared/statesModels/elementStyles.state';

@Injectable({
  providedIn: 'root'
})
export class FormItemService {
  private activeElement = new BehaviorSubject<HTMLElement>(null)
  readonly element$ = this.activeElement.asObservable()

  setActiveElement(element: HTMLElement) {
    this.activeElement.next(element)
  }
  setStyles(styles: ElementStyles) {
    const currentElement = this.activeElement.getValue()
    Object.entries(styles).filter(([key, _]) => key !== 'required' && key !== 'placeholder').forEach(([key, value]) => {
      currentElement.style[key] = value
    })
    styles.placeholder !== undefined &&
      (
        styles.placeholder !== '' ?
          currentElement.setAttribute('placeholder', styles.placeholder)
          : currentElement.removeAttribute('placeholder')
      )
    styles.required !== undefined &&
      (
        styles.required ?
          currentElement.setAttribute('required', 'true') : currentElement.removeAttribute('required')
      )
  }

  getStyles() {
    const currentElement = this.activeElement.getValue()
    return currentElement ? {
      width: window.getComputedStyle(currentElement).width || '',
      height: window.getComputedStyle(currentElement).height || '',
      placeholder: currentElement.getAttribute('placeholder') || '',
      required: currentElement.hasAttribute('required') || false,
      fontSize: window.getComputedStyle(currentElement).fontSize || '',
      fontWeight: window.getComputedStyle(currentElement).fontWeight || '',
      color: window.getComputedStyle(currentElement).color || '',
      borderStyle: window.getComputedStyle(currentElement).borderStyle || ''
    } : null
  }
  constructor() {
  }
}
