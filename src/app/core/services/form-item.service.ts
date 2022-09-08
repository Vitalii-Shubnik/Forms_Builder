import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'
import { ElementStyles } from 'src/app/shared/statesModels/elementStyles.state'
import { ActiveElement } from '../models/activeElement'

@Injectable()
export class FormItemService {
  active: BehaviorSubject<ActiveElement> = new BehaviorSubject<ActiveElement>(null)
  readonly element$: Observable<ActiveElement> = this.active.asObservable()

  setActive(el: ActiveElement): void {
    this.active.next({ ...el })
  }

  setStyles(styles: ElementStyles): void {
    const currentElement: HTMLElement = this.active.getValue()?.element
    if (!!currentElement) {
      this.setSimpleStyles(styles, currentElement)
      this.setPlaceholder(styles.placeholder, currentElement)
      this.setRequired(styles.required, currentElement)
    }
  }

  setSimpleStyles(styles: ElementStyles, element: HTMLElement): void {
    Object.entries(styles).filter(([key, _]) => key !== 'required' && key !== 'placeholder').forEach(([key, value]) => {
      element.style[key] = value
    })
  }

  setPlaceholder(placeholder: string, element: HTMLElement): void {
    placeholder !== undefined && (placeholder !== null ?
      element.setAttribute('placeholder', placeholder) : element.removeAttribute('placeholder'))
  }

  setRequired(required: boolean, element: HTMLElement): void {
    required !== undefined && (required ?
      element.setAttribute('required', 'true') : element.removeAttribute('required'))
  }

  getSelectStyles(styles: CSSStyleDeclaration): ElementStyles {
    return {
      width: styles.width,
      height: styles.height,
      fontSize: styles.fontSize,
      fontWeight: styles.fontWeight,
      color: styles.color,
      borderStyle: styles.borderStyle,
    }
  }

  getInputStyles(el: HTMLElement, styles: CSSStyleDeclaration): ElementStyles {
    return {
      width: styles.width,
      height: styles.height,
      fontSize: styles.fontSize,
      fontWeight: styles.fontWeight,
      color: styles.color,
      borderStyle: styles.borderStyle,
      required: !!el.getAttribute('required') || false,
      placeholder: el.getAttribute('placeholder') || '',
    }
  }
  
  getCheckboxStyles(el: HTMLElement, styles: CSSStyleDeclaration): ElementStyles {
    return {
      width: styles.width,
      height: styles.height,
      required: !!el.getAttribute('required') || false,
    }
  }

  getStyles(): ElementStyles {
    const currentElement = this.active.getValue()?.element
    if (!currentElement)
      return null
    const currentType = this.active.getValue()?.type
    const currentStyles: CSSStyleDeclaration = { ...window.getComputedStyle(currentElement) }
    switch (currentType) {
      case 'select':
      case 'button':
        return this.getSelectStyles(currentStyles)
      case 'checkbox':
        return this.getCheckboxStyles(currentElement, currentStyles)
      default:
        return this.getInputStyles(currentElement, currentStyles)
    }
  }
}
