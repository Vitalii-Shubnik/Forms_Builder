import { Injectable } from '@angular/core';
import { map, Subject } from 'rxjs';
import { CustomStyles } from '../models/styles';

@Injectable({
  providedIn: 'root'
})
export class FormItemService {
  private activeElement = new Subject<HTMLElement>()
  readonly element$ = this.activeElement.asObservable()
  currentElement: HTMLElement

  setActiveElement(element: HTMLElement) {
    this.activeElement.next(element)
  }
  setStyles(styles: CustomStyles) {
    this.currentElement.style.width = styles.width
    this.currentElement.style.height = styles.height
    this.currentElement.style.fontSize = styles.fontSize
    this.currentElement.style.fontWeight = styles.fontWeight
    this.currentElement.style.color = styles.color
    this.currentElement.style.borderStyle = styles.borderStyle
    this.currentElement.setAttribute('placeholder', styles.placeholder)
    this.currentElement.setAttribute('required', styles.required)
  }
  getStyles(){
    return {
      width: window.getComputedStyle(this.currentElement).width || '',
      height: window.getComputedStyle(this.currentElement).height || '',
      placeholder: this.currentElement.getAttribute('placeholder') || '',
      required: this.currentElement.getAttribute('required') || '',
      fontSize: window.getComputedStyle(this.currentElement).fontSize || '',
      fontWeight: window.getComputedStyle(this.currentElement).fontWeight || '',
      color: window.getComputedStyle(this.currentElement).color || '',
      borderStyle: window.getComputedStyle(this.currentElement).borderStyle || ''
    }
  }
  constructor() {
    this.element$.subscribe(el => this.currentElement = el)
  }
}
