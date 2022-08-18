import { Component, Input } from '@angular/core';
import { AvailableItems } from 'src/app/core/enums/availableItem';
@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss']
})
export class SelectorComponent  {
  @Input() data: AvailableItems;
  @Input() disabled: boolean
  @Input() items: string[] = []

  constructor() { }

}
