import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { CdkPortal } from '@angular/cdk/portal';
import { AfterContentChecked, Component, Input, OnDestroy, ViewChild } from '@angular/core';
import { CustomStyles } from 'src/app/core/models/styles';
import { FormItemService } from 'src/app/core/services/form-item.service';
import { PortalBridgeService } from 'src/app/core/services/portal-bridge.service';
import { StyleService } from 'src/app/core/services/style.service';

@Component({
  selector: 'app-second-section',
  templateUrl: './second-section.component.html',
  styleUrls: ['./second-section.component.scss']
})
export class SecondSectionComponent implements AfterContentChecked, OnDestroy {
  @ViewChild(CdkPortal, { static: true })
  portalContent: CdkPortal
  current: CustomStyles;
  isSingleClick: Boolean = true;
  activeItem$ = this.activeItem.element$
  @Input()
  used = [];
  constructor(
    private activeItem: FormItemService,
    private styleService: StyleService,
    private portalBridge: PortalBridgeService
  ) {
    // this.styleService.currentElement.subscribe(el => {
    //   el.setAttribute('placeholder', Math.random().toString())
    //   this.current = styleService.getElementCurrentStyleValues(el)
    // })
  }
  ngAfterContentChecked() {
    this.portalBridge.setPortal(this.portalContent)
  }
  ngOnDestroy(): void {
    this.portalContent.detach()
  }
  drop(event: CdkDragDrop<any>) {
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

  }
  changeActive(item: HTMLElement) {
    this.activeItem.setActiveElement(item)
    console.log(item)
  }
}
