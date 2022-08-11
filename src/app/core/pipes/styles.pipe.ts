import { Pipe, PipeTransform } from '@angular/core';
import { CustomStyles } from '../models/styles';

@Pipe({
  name: 'styles'
})
export class StylesPipe implements PipeTransform {

  transform(value: CustomStyles, ...args: unknown[]): unknown {
    return value && `
      Placeholder: ${value.placeholder || '' }\n
      Width: ${value.width || '' } \n
      Height: ${value.height || '' } \n
      Color: ${value.color || '' } \n
      BorderStyle: ${value.borderStyle || '' } \n
      Required: ${value.required || '' } \n
      FontWeight: ${value.fontWeight || '' } \n
      FontSize: ${value.fontSize || '' } \n
      ` ;
  }

}
