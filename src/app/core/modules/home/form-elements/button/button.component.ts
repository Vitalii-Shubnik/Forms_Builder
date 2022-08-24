import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { DumbComponent } from 'src/app/core/models/dumbComponent';
import { SelectElement } from 'src/app/core/models/elementOnClick';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent extends DumbComponent implements SelectElement {
  @Input() disabled: boolean
  @Input() data: any
  @Output()
  setActive = new EventEmitter<HTMLElement>()
  constructor() {
    super()
  }
  onClick(value: HTMLElement, event: MouseEvent) {
    event.preventDefault()
    this.setActive.emit(value)
  }
}
