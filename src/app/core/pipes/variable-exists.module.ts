import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VariableExistsPipe } from './variable-exists.pipe';



@NgModule({
  declarations: [
    VariableExistsPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    VariableExistsPipe
  ]
})
export class VariableExistsModule { }
