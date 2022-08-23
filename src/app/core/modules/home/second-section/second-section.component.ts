import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { CdkPortal } from '@angular/cdk/portal';
import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { BehaviorSubject, distinctUntilChanged, filter, forkJoin, Observable, Subject, take, takeUntil } from 'rxjs';
import { ActiveElement } from 'src/app/core/models/activeElement';
import { Drop } from 'src/app/core/models/drop';
import { FormItemService } from 'src/app/core/services/form-item.service';
import { PortalBridgeService } from 'src/app/core/services/portal-bridge.service';
import * as ElementActions from 'src/app/shared/actions/elementStyles.actions';
import { selectElementStyles } from 'src/app/shared/selectors/elementStyles.selector';
import { ElementStyles } from 'src/app/shared/statesModels/elementStyles.state';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';

@Component({
  selector: 'app-second-section',
  templateUrl: './second-section.component.html',
  styleUrls: ['./second-section.component.scss', '../home/home.component.scss']
})
export class SecondSectionComponent implements Drop, OnInit, OnDestroy, AfterViewInit {
  @ViewChild(CdkPortal, { static: true })
  portalContent: CdkPortal

  activeItem$ = this.formItemService.element$
  activeElementStyles$: Observable<ElementStyles> = this.store.select(selectElementStyles)

  styles: ElementStyles = null
  previousStyles: ElementStyles = null

  dragging$ = new BehaviorSubject<boolean>(false)

  destroy$: Subject<boolean> = new Subject<boolean>();
  used: any[] = [];
  constructor(
    public dialog: MatDialog,
    private formItemService: FormItemService,
    private portalBridge: PortalBridgeService,
    private store: Store
  ) { }

  dropToRemove = (event: CdkDragDrop<any, any, any>) => {
    event.previousContainer.data.splice(event.previousIndex, 1)
    this.formItemService.setActive(null)
    this.styles = {}
    this.previousStyles = {}
  }
  dropToEdit = (event: CdkDragDrop<any, any, any>) => {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '250px',
      data: event.previousContainer.data[event.previousIndex],
    });

    dialogRef.afterClosed().pipe(
      take(1),
      filter(el => !!el)
    ).subscribe(result => {
      // console.log('subscribed ' + result)
      event.previousContainer.data[event.previousIndex].data = result;
    });
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
  ngOnInit() {
    this.activeItem$.pipe(
      takeUntil(this.destroy$),
      distinctUntilChanged((prev, next) => {
        return prev
          && (JSON.stringify(prev) === JSON.stringify(next))
        //better use lodash 
      }),
    ).subscribe(el => {
      this.getElementCurrentStyleValues();
    })

    this.activeElementStyles$.pipe(
      takeUntil(this.destroy$),
      distinctUntilChanged((prev, next) => {
        return prev
          && (JSON.stringify(prev) === JSON.stringify(next))
        //better use lodash 
      }),
    ).subscribe(el => {
      this.styles = { ...el }
      this.previousStyles = { ...el }
    })
  }
  ngAfterViewInit() {
    this.portalBridge.setPortal(this.portalContent)
  }

  setActive(data: ActiveElement) {
    // this.formItemService.setActiveElementType(data.type)
    // this.formItemService.setActiveElement(data.element)
    // console.log(data)
    this.formItemService.setActive(data)
  }

  getElementCurrentStyleValues(): void {                                          ///
    this.store.dispatch(ElementActions.elementChangeStyles({
      styles: this.formItemService.getStyles()
    }))
  }
  setElementCurrentStyleValues() {                                                            ///
    const changedStyles: ElementStyles = Object.fromEntries(Object.entries(this.styles)
      .filter(([key, value]) => this.styles[key] !== this.previousStyles[key]))
    this.store.dispatch(ElementActions.elementChangeSelfStyles({
      styles: { ...changedStyles }
    }))
  }

  ngOnDestroy(): void {                                                                   ///
    // this.portalContent.detach()
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
