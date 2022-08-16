import { Component, Input } from '@angular/core';
import { FormValues } from 'src/app/core/models/formValues';
@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss']
})
export class SelectorComponent  {
  @Input() data: FormValues;
  @Input() disabled: boolean
  @Input() items: string[] = []

  constructor() { }

}
