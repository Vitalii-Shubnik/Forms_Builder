import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DumbComponent } from 'src/app/core/models/dumbComponent';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent extends DumbComponent {
  @Input() disabled: boolean
  @Input() data: any
  @Output()
  setActive = new EventEmitter<HTMLElement>()
  constructor() {
    super()
  }
  onClick(value: HTMLElement) {
    this.setActive.emit(value)
  }
}