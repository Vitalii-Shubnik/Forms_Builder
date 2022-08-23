import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ElementStyles } from 'src/app/shared/statesModels/elementStyles.state';
import { AvailableItems } from '../enums/availableItem';

@Injectable({
  providedIn: 'root'
})
export class FormItemService {
  private activeElement = new BehaviorSubject<HTMLElement>(null)
  private activeElementType = new BehaviorSubject<AvailableItems>(null)
  readonly element$ = this.activeElement.asObservable()

  setActiveElementType(type: AvailableItems) {
    this.activeElementType.next(type)
  }
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
  getFullStyles(el: HTMLElement) {
    return {
      width: window.getComputedStyle(el).width || '',
      height: window.getComputedStyle(el).height || '',
      fontSize: window.getComputedStyle(el).fontSize || '',
      fontWeight: window.getComputedStyle(el).fontWeight || '',
      color: window.getComputedStyle(el).color || '',
      borderStyle: window.getComputedStyle(el).borderStyle || '',
      required: !!el.getAttribute('required') || false,
      placeholder: el.getAttribute('placeholder') || '',
    }
  }
  getStyles(): ElementStyles {
    const currentType = this.activeElementType.getValue()
    const currentElement = this.activeElement.getValue()
    if (!currentElement)
      return null
    const styles: ElementStyles = this.getFullStyles(currentElement)
    switch (currentType) {
      case 'select':
      case 'button': {
        return {
          ...styles,
          required: null,
          placeholder: null,
        }
      }
      case 'checkbox':
        return {
          ...styles,
          fontSize: null,
          fontWeight: null,
          color: null,
          borderStyle: null,
          placeholder: null,
        }
      default:
        return { ...styles }
    }
  }

}
