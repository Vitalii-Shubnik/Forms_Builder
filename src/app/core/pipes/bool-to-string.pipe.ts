import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'boolToString'
})
export class BoolToStringPipe implements PipeTransform {

  transform(value: boolean, ...args: unknown[]): unknown {
    return value!==null && value!==undefined && value.toString();
  }

}
