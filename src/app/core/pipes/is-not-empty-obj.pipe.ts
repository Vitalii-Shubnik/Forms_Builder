import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isNotEmptyObj'
})
export class IsNotEmptyObjPipe implements PipeTransform {

  transform(value: object, ...args: unknown[]): unknown {
    return !!value && Object.keys(value).length > 0
      && Object.getPrototypeOf(value) === Object.prototype
  }

}
