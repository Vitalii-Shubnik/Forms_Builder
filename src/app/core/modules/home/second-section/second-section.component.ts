import { CdkPortal } from '@angular/cdk/portal';
import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { distinctUntilChanged, Observable, Subject, takeUntil } from 'rxjs';
import { FormItemService } from 'src/app/core/services/form-item.service';
import { PortalBridgeService } from 'src/app/core/services/portal-bridge.service';
import * as ElementActions from 'src/app/shared/actions/elementStyles.actions';
import { selectElementStyles } from 'src/app/shared/selectors/elementStyles.selector';
import { ElementStyles } from 'src/app/shared/statesModels/elementStyles.state';

@Component({
  selector: 'app-second-section',
  templateUrl: './second-section.component.html',
  styleUrls: ['./second-section.component.scss', '../home/home.component.scss']
})
export class SecondSectionComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild(CdkPortal, { static: false })
  portalContent: CdkPortal

  activeItem$ = this.formItemService.element$
  activeElementStyles$: Observable<ElementStyles> = this.store.select(selectElementStyles)

  styles: ElementStyles = null
  previousStyles: ElementStyles = null


  destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(
    private formItemService: FormItemService,
    private portalBridge: PortalBridgeService,
    private store: Store,
  ) { }
  onRemoved() {
    this.formItemService.setActive(null)
    this.styles = {}
    this.previousStyles = {}
  }

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

  getElementCurrentStyleValues(): void {
    this.store.dispatch(ElementActions.elementChangeStyles({
      styles: this.formItemService.getStyles()
    }))
  }
  setElementCurrentStyleValues() {
    const changedStyles: ElementStyles = Object.fromEntries(Object.entries(this.styles)
      .filter(([key, value]) => this.styles[key] !== this.previousStyles[key]))
    this.store.dispatch(ElementActions.elementChangeSelfStyles({
      styles: { ...changedStyles }
    }))
    this.getElementCurrentStyleValues()
  }

  ngOnDestroy(): void {
    // this.portalContent.detach()
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
