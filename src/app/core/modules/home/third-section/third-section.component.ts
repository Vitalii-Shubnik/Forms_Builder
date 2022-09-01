import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop'
import { Component, Input } from '@angular/core'
import { AvailableItems } from 'src/app/core/enums/availableItem'
import { Drop } from 'src/app/core/models/drop'

@Component({
  selector: 'app-third-section',
  templateUrl: './third-section.component.html',
  styleUrls: ['./third-section.component.scss', '../home/home.component.scss']
})
export class ThirdSectionComponent implements Drop {
  available = [
    { type: AvailableItems.input, data: '' },
    { type: AvailableItems.select, data: [] },
    { type: AvailableItems.textarea, data: '' },
    { type: AvailableItems.button, data: '' },
    { type: AvailableItems.checkbox, data: '' }
  ]
  types = (Object.keys(AvailableItems) as Array<keyof typeof AvailableItems>)
  elementToAdd: AvailableItems = AvailableItems.input
  constructor() { }

  add = () => {
    this.available.push({ type: this.elementToAdd, data: '' })
  }

  drop = (event: CdkDragDrop<any, any, any>) => {
    if (event.previousContainer === event.container)
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex)
  }

  noReturnPredicate() {
    return false
  }
}
