import { CdkDragDrop } from '@angular/cdk/drag-drop'
import { Component, EventEmitter, Output } from '@angular/core'
import { MatDialog, MatDialogRef } from '@angular/material/dialog'
import { filter, Observable, take } from 'rxjs'
import { DropListElementData } from 'src/app/core/models/dropListElementData'
import { FormElDraggingService } from 'src/app/core/services/form-el-dragging.service'
import { EditDialogComponent } from '../../edit-dialog/edit-dialog.component'

@Component({
  selector: 'app-edit-fields',
  templateUrl: './edit-fields.component.html',
  styleUrls: ['./edit-fields.component.scss']
})
export class EditFieldsComponent {
  @Output() removed = new EventEmitter<void>()
  dragging$: Observable<boolean>

  constructor(
    public dialog: MatDialog,
    private draggingService: FormElDraggingService
  ) {
    this.dragging$ = this.draggingService.dragging$
  }

  dropToRemove = (event: CdkDragDrop<DropListElementData[]>): void => {
    event.previousContainer.data.splice(event.previousIndex, 1)
    this.removed.emit()
  }

  dropToEdit = (event: CdkDragDrop<DropListElementData[]>): void => {
    const dialogRef:MatDialogRef<EditDialogComponent> = this.dialog.open(EditDialogComponent, {
      width: '250px',
      data: event.previousContainer.data[event.previousIndex],
    })

    dialogRef.afterClosed().pipe(
      take(1),
      filter(el => !!el)
    ).subscribe(result => {
      event.previousContainer.data[event.previousIndex].data = result
    })
  }
}
