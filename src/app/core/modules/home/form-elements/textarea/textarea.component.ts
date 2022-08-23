import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { DumbComponent } from 'src/app/core/models/dumbComponent';
import { SelectElement } from 'src/app/core/models/elementOnClick';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextareaComponent extends DumbComponent implements SelectElement {
  @Input() disabled: boolean
  @Input() data: any
  @Output() 
  setActive = new EventEmitter<HTMLElement>()
  constructor() {
    super()
  }
  onClick(value: HTMLElement ){
    this.setActive.emit(value)
  }
}
