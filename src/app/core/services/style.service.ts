import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StyleService {
  currentElement: Subject<HTMLElement> = new Subject()
  constructor() { 
    this.currentElement.subscribe(el=>console.log(el))
  }
  setCurrent(el: HTMLElement){
    this.currentElement.next(el)
  }
  getElementType(el: HTMLElement){
    // el.style.color
    return el.nodeName.toLowerCase()
  }
  getElementCurrentStyleValues(el: HTMLElement){
    // const names = el.getAttributeNames()
    // names.filter(el=> el === 'placeholder' || 'required')
    return {
      width: el.style.width,
      height: el.style.height,
      placeholder: el.getAttribute('placeholder'),
      required: el.getAttribute('required'),
      fontsize: el.style.fontSize,
      fontweight: el.style.fontWeight,
      color: el.style.color,
    }
  }
}
