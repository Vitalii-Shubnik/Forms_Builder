import { Pipe, PipeTransform } from '@angular/core';
import { CustomStyles } from '../models/styles';

@Pipe({
  name: 'styles'
})
export class StylesPipe implements PipeTransform {

  transform(value: HTMLElement, ...args: unknown[]): unknown {
    {
      return value && `
      Placeholder: ${value.getAttribute('placeholder') || ''}\n
      Width: ${window.getComputedStyle(value).width || ''} \n
      Height: ${window.getComputedStyle(value).height  || ''} \n
      Color: ${window.getComputedStyle(value).color  || ''} \n
      BorderStyle: ${window.getComputedStyle(value).borderStyle  || ''} \n
      Required: ${value.getAttribute('required') || ''} \n
      FontWeight: ${window.getComputedStyle(value).fontWeight || ''} \n
      FontSize: ${window.getComputedStyle(value).fontSize  || ''} \n
      ` ;
    }

  }
}