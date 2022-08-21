import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input } from '@angular/core';
import { Drop } from 'src/app/core/models/drop';

@Component({
  selector: 'app-third-section',
  templateUrl: './third-section.component.html',
  styleUrls: ['./third-section.component.scss', '../home/home.component.scss']
})
export class ThirdSectionComponent implements Drop {
  @Input()
  available: any

  constructor() {}

  drop = (event: CdkDragDrop<any, any, any>) => {
    if (event.previousContainer === event.container)
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex)
  }

  noReturnPredicate() {
    return false;
  }
}
