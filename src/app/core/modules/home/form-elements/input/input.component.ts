import { Component, Input } from '@angular/core';
import { onClickFormItem } from 'src/app/core/models/elementOnClick';
import { FormItemService } from 'src/app/core/services/form-item.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent extends onClickFormItem {
  @Input() disabled: boolean

  constructor(
    formItems: FormItemService,
  ) {
    super(formItems)
  }
}
