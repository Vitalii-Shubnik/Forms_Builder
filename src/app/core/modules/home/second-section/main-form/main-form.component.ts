import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ActiveElement } from 'src/app/core/models/activeElement';
import { FormElDraggingService } from 'src/app/core/services/form-el-dragging.service';
import { FormGeneralService } from 'src/app/core/services/form-general.service';
import { FormItemService } from 'src/app/core/services/form-item.service';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.scss']
})
export class MainFormComponent {
  used: any[] = [];
  dragging$: Observable<boolean>
  constructor(
    private formStylesService: FormGeneralService,
    private formItemService: FormItemService,
    private draggingService: FormElDraggingService
  ) {
    this.dragging$ = this.draggingService.dragging$
  }

  setDragging(state: boolean) {
    this.draggingService.setDragging(state)
  }

  setMainForm(el: HTMLElement) {
    this.formStylesService.setActive(el)
  }

  setActive(data: ActiveElement) {
    this.formItemService.setActive(data)
  }

  drop = (event: CdkDragDrop<any, any, any>) => {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  };
}
