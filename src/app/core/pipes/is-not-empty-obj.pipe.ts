import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'isNotEmptyObj'
})
export class IsNotEmptyObjPipe implements PipeTransform {

  transform(value: {}): boolean {
    return !!value && Object.keys(value).filter((key) => value[key] !== null).length > 0
      && Object.getPrototypeOf(value) === Object.prototype
  }
}
