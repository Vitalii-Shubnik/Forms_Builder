import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { DumbComponent } from 'src/app/core/models/dumbComponent'

@Component({
  selector: 'app-form-general-styles',
  templateUrl: './form-general-styles.component.html',
  styleUrls: ['./form-general-styles.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormGeneralStylesComponent extends DumbComponent {
  @Output() stylesChanged = new EventEmitter<void>()
  @Input() form: FormGroup<{
    'border': FormControl<string|null>,
    'fontStyle': FormControl<string|null>,
    'backgroundColor': FormControl<string|null>
  }>;
  
  constructor() {
    super()
  }

  setFormStyles(): void {
    this.stylesChanged.emit()
  }
}
