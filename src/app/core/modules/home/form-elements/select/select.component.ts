import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DumbComponent } from 'src/app/core/models/dumbComponent';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent extends DumbComponent {
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
  onClick(value: HTMLElement) {
    this.setActive.emit(value)
  }
}
