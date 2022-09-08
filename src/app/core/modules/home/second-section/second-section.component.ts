import { CdkPortal } from '@angular/cdk/portal'
import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core'
import { FormBuilder, FormControl } from '@angular/forms'
import { Store } from '@ngrx/store'
import { distinctUntilChanged, Observable, Subject, takeUntil } from 'rxjs'
import { ActiveElement } from 'src/app/core/models/activeElement'
import { FormItemService } from 'src/app/core/services/form-item.service'
import { PortalBridgeService } from 'src/app/core/services/portal-bridge.service'
import * as ElementActions from 'src/app/shared/actions/elementStyles.actions'
import { selectElementStyles } from 'src/app/shared/selectors/elementStyles.selector'
import { ElementStyles } from 'src/app/shared/statesModels/elementStyles.state'

@Component({
  selector: 'app-second-section',
  templateUrl: './second-section.component.html',
  styleUrls: ['./second-section.component.scss', '../home/home.component.scss']
})
export class SecondSectionComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild(CdkPortal, { static: false }) portalContent: CdkPortal
  activeItem$: Observable<ActiveElement>
  activeElementStyles$: Observable<ElementStyles>
  formStyles = this.fb.group({
    'height': new FormControl<string>(null),
    'width': new FormControl<string>(null),
    'fontWeight': new FormControl<string>(null),
    'fontSize': new FormControl<string>(null),
    'color': new FormControl<string>(null),
    'borderStyle': new FormControl<string>(null),
    'required': new FormControl<boolean>(null),
    'placeholder': new FormControl<string>(null),
  })
  initial = {
    height: null,
    width: null,
    fontWeight: null,
    fontSize: null,
    color: null,
    borderStyle: null,
    required: null,
    placeholder: null
  }
  styles: ElementStyles = null
  previousStyles: ElementStyles = null
  destroy$: Subject<boolean> = new Subject<boolean>()
  justRemoved: boolean = false;

  constructor(
    private formItemService: FormItemService,
    private portalBridge: PortalBridgeService,
    private store: Store,
    private fb: FormBuilder
  ) {
    this.activeItem$ = this.formItemService.element$
    this.activeElementStyles$ = this.store.select(selectElementStyles)
  }

  onRemoved(): void {
    this.formItemService.setActive(null)
    this.formStyles.setValue({ ... this.initial })
    // this.styles = {}
    this.previousStyles = {}
    this.justRemoved = true
  }

  ngOnInit(): void {
    this.activeItem$.pipe(
      takeUntil(this.destroy$),
      distinctUntilChanged((prev, next) => {
        return prev && (JSON.stringify(prev) === JSON.stringify(next)) && !this.justRemoved
      })
    ).subscribe(el => {
      this.getElementCurrentStyleValues()
    })

    this.activeElementStyles$.pipe(
      takeUntil(this.destroy$),
      distinctUntilChanged((prev, next) => {
        return prev && (JSON.stringify(prev) === JSON.stringify(next)) && !this.justRemoved
      })
    ).subscribe(el => {
      this.justRemoved = false
      this.formStyles.setValue({ ...this.initial, ...el })
      // this.styles = { ...el }
      this.previousStyles = { ...el }
    })
  }

  ngAfterViewInit(): void {
    this.portalBridge.setPortal(this.portalContent)
  }

  getElementCurrentStyleValues(): void {
    this.store.dispatch(ElementActions.elementChangeStyles({
      styles: this.formItemService.getStyles()
    }))
  }

  setElementCurrentStyleValues(): void {
    const changedStyles: ElementStyles = Object.fromEntries(Object.entries(this.formStyles.value)
      .filter(([key, value]) => this.formStyles.value[key] !== this.previousStyles[key]))
    this.store.dispatch(ElementActions.elementChangeSelfStyles({
      styles: { ...changedStyles }
    }))
    this.getElementCurrentStyleValues()
  }

  ngOnDestroy(): void {
    // this.portalContent.detach()
    this.destroy$.next(true)
    this.destroy$.unsubscribe()
  }
}
