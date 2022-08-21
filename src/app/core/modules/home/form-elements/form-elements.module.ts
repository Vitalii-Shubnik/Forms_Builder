import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonComponent } from './button/button.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { InputComponent } from './input/input.component';
import { SelectComponent } from './select/select.component';
import { TextareaComponent } from './textarea/textarea.component';

@NgModule({
  declarations: [
    InputComponent,
    TextareaComponent,
    SelectComponent,
    CheckboxComponent,
    ButtonComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    InputComponent,
    TextareaComponent,
    SelectComponent,
    CheckboxComponent,
    ButtonComponent,
  ]
})
export class FormElementsModule { }
