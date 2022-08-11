import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CustomStyles } from '../models/styles';

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
  getElementCurrentStyleValues(el: HTMLElement): CustomStyles{
    return {
      width: el.style.width,
      height: el.style.height,
      placeholder: el.getAttribute('placeholder'),
      required: el.getAttribute('required'),
      fontSize: el.style.fontSize,
      fontWeight: el.style.fontWeight,
      color: el.style.color,
      borderStyle: el.style.borderStyle
    }
  }
}
