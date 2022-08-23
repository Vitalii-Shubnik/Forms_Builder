import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ElementStyles } from 'src/app/shared/statesModels/elementStyles.state';
import { AvailableItems } from '../enums/availableItem';
import { ActiveElement } from '../models/activeElement';

@Injectable({
  providedIn: 'root'
})
export class FormItemService {
  private active = new BehaviorSubject<ActiveElement>(null)
  readonly element$ = this.active.asObservable()

  setActive(el: ActiveElement) {
    this.active.next({ ...el })
  }

  setStyles(styles: ElementStyles) {
    const currentElement = this.active.getValue().element
    if (!!currentElement) {
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
    console.log(this.active.getValue())
    const currentType = this.active.getValue()?.type
    const currentElement = this.active.getValue()?.element
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
