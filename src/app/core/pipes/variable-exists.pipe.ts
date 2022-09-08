import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'variableExists'
})
export class VariableExistsPipe implements PipeTransform {

  transform(value: unknown): boolean {
    return value !== null && value !== undefined
  }

}
