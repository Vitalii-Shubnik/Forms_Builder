import { style } from '@angular/animations';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ElementStyles } from 'src/app/shared/statesModels/elementStyles.state';

@Injectable({
  providedIn: 'root'
})
export class FormItemService {

  private activeElement = new Subject<HTMLElement>()
  readonly element$ = this.activeElement.asObservable()
  private currentElement: HTMLElement

  setActiveElement(element: HTMLElement) {
    this.activeElement.next(element)
  }
  setStyles(styles: ElementStyles) {
    Object.entries(styles).filter(([key, _]) => key !== 'required' && key !== 'placeholder').forEach(([key, value]) => {
      this.currentElement.style[key] = value
    })
    styles.placeholder !== undefined &&
      (
        styles.placeholder !== '' ?
          this.currentElement.setAttribute('placeholder', styles.placeholder)
          : this.currentElement.removeAttribute('placeholder')
      )
    styles.required !== undefined &&
      (
        styles.required ?
          this.currentElement.setAttribute('required', 'true') : this.currentElement.removeAttribute('required')
      )
  }

  getStyles() {
    return this.currentElement ? {
      width: window.getComputedStyle(this.currentElement).width || '',
      height: window.getComputedStyle(this.currentElement).height || '',
      placeholder: this.currentElement.getAttribute('placeholder') || '',
      required: this.currentElement.hasAttribute('required') || false,
      fontSize: window.getComputedStyle(this.currentElement).fontSize || '',
      fontWeight: window.getComputedStyle(this.currentElement).fontWeight || '',
      color: window.getComputedStyle(this.currentElement).color || '',
      borderStyle: window.getComputedStyle(this.currentElement).borderStyle || ''
    } : null
  }
  constructor() {
    this.element$.subscribe(el => {
      this.currentElement = el
    })
  }
}
