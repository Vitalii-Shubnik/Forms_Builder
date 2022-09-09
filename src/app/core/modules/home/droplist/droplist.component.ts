import { CdkDragDrop } from '@angular/cdk/drag-drop'
import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core'
import { AvailableItems } from 'src/app/core/enums/availableItem'
import { ActiveElement } from 'src/app/core/models/activeElement'
import { DropListElementData } from 'src/app/core/models/dropListElementData'
import { DumbComponent } from 'src/app/core/models/dumbComponent'

@Component({
  selector: 'app-droplist',
  templateUrl: './droplist.component.html',
  styleUrls: ['./droplist.component.scss',]
})
export class DroplistComponent extends DumbComponent implements AfterViewInit {
  @ViewChild('mainform') form: ElementRef<HTMLElement>
  @Input() disabled: boolean = false
  @Input() dropListData: DropListElementData[] = []
  @Input() formClass: string = 'default-form'
  @Input() noReturnPredicate: () => boolean = () => true
  @Input() dragHandle: boolean = false
  @Output() SetActive = new EventEmitter<ActiveElement>()
  @Output() SetDropped = new EventEmitter<CdkDragDrop<DropListElementData[]>>()
  @Output() dragEvent = new EventEmitter<boolean>()
  @Output() mainformInit = new EventEmitter<HTMLElement>()

  constructor() {
    super()
  }

  setActive(element: HTMLElement, type: AvailableItems): void {
    this.SetActive.emit({ type, element })
  }

  drop(event: CdkDragDrop<DropListElementData[]>): void {
    this.SetDropped.emit(event)
  }

  ngAfterViewInit(): void {
    this.mainformInit.emit(this.form.nativeElement)
  }
}
