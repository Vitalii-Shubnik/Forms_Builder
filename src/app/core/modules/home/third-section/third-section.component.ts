import { Component, Input} from '@angular/core';
import { onDrop } from 'src/app/core/models/onDrop';

@Component({
  selector: 'app-third-section',
  templateUrl: './third-section.component.html',
  styleUrls: ['./third-section.component.scss', '../home/home.component.scss']
})
export class ThirdSectionComponent extends onDrop {

  constructor() {
    super()
  }

  @Input()
  available: any

  noReturnPredicate() {
    return false;
  }
}
