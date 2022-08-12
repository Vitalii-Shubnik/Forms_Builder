import { Component, ElementRef, ViewChild } from '@angular/core';
import { CdkDragDrop, CdkDropList, copyArrayItem, moveItemInArray } from '@angular/cdk/drag-drop';
import { AvailableItems } from '../../../enums/availableItem';
import { StyleService } from '../../../services/style.service';
import { Renderer2 } from '@angular/core';
import { CustomStyles } from '../../../models/styles';
@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
})
export class HomeComponent {
  @ViewChild('customForm') form: ElementRef<CdkDropList>;
  constructor(
    private styleService: StyleService,
    private renderer: Renderer2
  ) {
    this.styleService.currentElement.subscribe(el => {
      el.setAttribute('placeholder', Math.random().toString())
      this.current = styleService.getElementCurrentStyleValues(el)
    })
  }
  used = [];
  current: CustomStyles;
  available = [{ text: 'input', tag: AvailableItems.input },
  { text: 'select', tag: AvailableItems.select },
  { text: 'textarea', tag: AvailableItems.textarea },
  { text: 'button', tag: AvailableItems.button },
  { text: 'checkbox', tag: AvailableItems.checkbox }];

  customClick(ev: MouseEvent, item: any) {
    console.log(item);
  }

  drop(event: CdkDragDrop<any>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    //  event.previousContainer.removeItem(event.item)
    } else {
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }

  }
  noReturnPredicate() {
    return false;
  }

  
}



