import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { DumbComponent } from 'src/app/core/models/dumbComponent';

@Component({
  selector: 'app-edit-field',
  templateUrl: './edit-field.component.html',
  styleUrls: ['./edit-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditFieldComponent extends DumbComponent  {
  @Input() dragging = false
  @Input() icon: string
  @Input() className: string
  @Input() activeClassName: string
  @Output() dropped = new EventEmitter<CdkDragDrop<any, any, any>>()

  constructor() {
    super()
  }

  drop(event: CdkDragDrop<any, any, any>){
    this.dropped.emit(event)
  }
}
