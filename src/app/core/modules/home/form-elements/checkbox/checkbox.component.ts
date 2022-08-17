import { Component, Input, OnInit } from '@angular/core';
import { onClickFormItem } from 'src/app/core/models/elementOnClick';
import { FormItemService } from 'src/app/core/services/form-item.service';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent extends onClickFormItem {
  @Input() disabled: boolean

  constructor(
    private formItems: FormItemService,
  ) {
    super(formItems)
  }
}