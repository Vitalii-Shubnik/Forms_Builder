import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DroplistComponent } from './droplist.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormElementsModule } from '../form-elements/form-elements.module';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [DroplistComponent],
  imports: [
    CommonModule,
    DragDropModule,
    FormElementsModule,
    MatIconModule,
  ],
  exports: [DroplistComponent]
})
export class DroplistModule { }
