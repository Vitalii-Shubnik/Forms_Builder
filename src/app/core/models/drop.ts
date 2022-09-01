import { CdkDragDrop } from "@angular/cdk/drag-drop"

export interface Drop {
  drop:(event: CdkDragDrop<any>) => void
}