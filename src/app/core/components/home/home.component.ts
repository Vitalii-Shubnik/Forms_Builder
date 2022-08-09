import { CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { DomElementSchemaRegistry } from '@angular/compiler';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor() { }
  @ViewChildren('first') domElementsRef:ElementRef;
  someArray = [
    '<div #first class="item-to-drag"><label>Input</label><div>Input</div></div>',
    'input',
    'textarea',
    'select',

  ]
  drop(ev: CdkDragDrop<any>){
    moveItemInArray(this.someArray, ev.previousIndex, ev.currentIndex);
    console.log(ev)
  }
}
