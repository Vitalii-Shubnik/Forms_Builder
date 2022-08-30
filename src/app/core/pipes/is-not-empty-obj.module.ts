import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { IsNotEmptyObjPipe } from './is-not-empty-obj.pipe'

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
