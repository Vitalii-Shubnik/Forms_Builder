import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { onClickFormItem } from 'src/app/core/models/elementOnClick';
import { FormItemService } from 'src/app/core/services/form-item.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent extends onClickFormItem {
  @Input() disabled: boolean

  constructor(
    private formItems: FormItemService,
  ) {
    super(formItems)
  }
}
