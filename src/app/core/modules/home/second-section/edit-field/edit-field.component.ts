import { CdkDragDrop } from '@angular/cdk/drag-drop'
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core'
import { DropListElementData } from 'src/app/core/models/dropListElementData'
import { DumbComponent } from 'src/app/core/models/dumbComponent'

@Component({
  selector: 'app-edit-field',
  templateUrl: './edit-field.component.html',
  styleUrls: ['./edit-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditFieldComponent extends DumbComponent {
  @Input() dragging: boolean = false
  @Input() icon: string
  @Input() className: string
  @Input() activeClassName: string
  @Output() dropped = new EventEmitter<CdkDragDrop<DropListElementData[]>>()

  constructor() {
    super()
  }

  drop(event: CdkDragDrop<DropListElementData[]>): void {
    this.dropped.emit(event)
  }
}
