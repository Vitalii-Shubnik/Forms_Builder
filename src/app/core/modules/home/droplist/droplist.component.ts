import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AvailableItems } from 'src/app/core/enums/availableItem';
import { ActiveElement } from 'src/app/core/models/activeElement';
import { DumbComponent } from 'src/app/core/models/dumbComponent';

@Component({
  selector: 'app-droplist',
  templateUrl: './droplist.component.html',
  styleUrls: ['./droplist.component.scss', '../home/home.component.scss']
})
export class DroplistComponent extends DumbComponent {
  @Input() disabled: boolean = false
  @Input() dropListData: any[] = []
  // @Input() dragging: boolean = false
  @Input() noReturnPredicate = () => true
  @Input() dragHandle: boolean = false
  @Output() SetActive = new EventEmitter<ActiveElement>()
  @Output() SetDropped = new EventEmitter<CdkDragDrop<any,any,any>>()
  @Output() dragEvent = new EventEmitter<boolean>()
  constructor() {
    super()
  }
  setActive(element: HTMLElement, type: AvailableItems){
    this.SetActive.emit({type,element})
  }
  
  drop(event: CdkDragDrop<any, any, any>){
    this.SetDropped.emit(event)
  }
}
