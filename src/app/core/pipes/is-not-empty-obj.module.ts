import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IsNotEmptyObjPipe } from './is-not-empty-obj.pipe';



@NgModule({
  declarations: [
    IsNotEmptyObjPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    IsNotEmptyObjPipe
  ]
})
export class IsNotEmptyObjModule { }
