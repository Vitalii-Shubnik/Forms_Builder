// import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
// import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
// import { ComponentPortal, DomPortal, Portal } from '@angular/cdk/portal';
// import { InputComponent } from '../input/input.component';
// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.scss']
// })
// export class HomeComponent implements AfterViewInit, OnInit {
//   @ViewChildren('dragItem') items: QueryList<ElementRef<HTMLElement>>






//   // availablePortals:DomPortal<any>[] = [] ;
//   domPortal: ComponentPortal<any>;
//   selectedPortal: Portal<any>;

//   componentPortals: ComponentPortal<any>[] = []

//   constructor() { }

//   ngOnInit(): void {
//     this.componentPortals.push(new ComponentPortal(InputComponent));
//     this.componentPortals.push(new ComponentPortal(InputComponent));
//   }

//   ngAfterViewInit() {
//     this.componentPortals.push(new ComponentPortal(InputComponent));
//     this.componentPortals.push(new ComponentPortal(InputComponent));
//   }

//   drop(ev: CdkDragDrop<ComponentPortal<any>[]>) {
//     // if (this.componentPortals.filter(el => el.element == ev.item.element.nativeElement).length == 0) {
//     //   console.log('new element')
//     //   this.domElements.push(new ComponentPortal(ev.item.element))
//     // }
//     console.log(this.componentPortals)
//   }

//   dropBack(ev: CdkDragDrop<any[]>) {
//     // if (this.domElements.find(el => el.element == ev.item.element.nativeElement) != undefined) {
//     //   this.domElements = this.domElements.filter(el => el.element != ev.item.element.nativeElement)
//     //   console.log("i am here")
//     // }
//   }
// }





import { Component, ElementRef, ViewChild } from '@angular/core';
import { CdkDragDrop, CdkDropList, copyArrayItem, moveItemInArray } from '@angular/cdk/drag-drop';
import { AvailableItems } from '../../enums/availableItem';
import { StyleService } from '../../services/style.service';
import { Renderer2 } from '@angular/core';
import { CustomStyles } from '../../models/styles';
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
      console.log(styleService.getElementCurrentStyleValues(el))
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

  remove(ev: MouseEvent, item) {
    console.log(item)
  }
}



