import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core'
import { DumbComponent } from 'src/app/core/models/dumbComponent'
import { FormGeneralStyles } from 'src/app/core/models/formGeneralStyles'

@Component({
  selector: 'app-form-general-styles',
  templateUrl: './form-general-styles.component.html',
  styleUrls: ['./form-general-styles.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormGeneralStylesComponent extends DumbComponent {
  @Input() styles: FormGeneralStyles
  @Output() stylesChanged = new EventEmitter()

  constructor() {
    super()
  }

  setFormStyles() {
    this.stylesChanged.emit()
  }
}
