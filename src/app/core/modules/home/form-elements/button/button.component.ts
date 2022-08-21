import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { DumbComponent } from 'src/app/core/models/dumbComponent';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent extends DumbComponent {
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
