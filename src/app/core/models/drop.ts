import { CdkDragDrop } from '@angular/cdk/drag-drop'
import { DropListElementData } from './dropListElementData'

export interface Drop {
  drop:(event: CdkDragDrop<DropListElementData[]>) => void
}