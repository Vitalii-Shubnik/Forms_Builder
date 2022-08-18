import { Component, Input, OnInit } from '@angular/core';
import { onClickFormItem } from 'src/app/core/models/elementOnClick';
import { FormItemService } from 'src/app/core/services/form-item.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent extends onClickFormItem {
  @Input() disabled: boolean
  @Input() items: string[]

  constructor(
    formItems: FormItemService,
  ) {
    super(formItems)
  }
}

