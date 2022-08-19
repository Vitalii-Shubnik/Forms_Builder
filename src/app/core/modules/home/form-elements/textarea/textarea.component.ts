import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DumbComponent } from 'src/app/core/models/dumbComponent';
import { onClickFormItem } from 'src/app/core/models/elementOnClick';
import { FormItemService } from 'src/app/core/services/form-item.service';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent extends DumbComponent {
  @Input() disabled: boolean
  @Input() data: any
  @Output() 
  setActive = new EventEmitter<HTMLElement>()
  constructor(
    // formItems: FormItemService,
  ) {
    // super(formItems)
    super()
  }
  onClick(value: HTMLElement ){
    this.setActive.emit(value)
  }
}
