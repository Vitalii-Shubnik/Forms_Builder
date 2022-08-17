import { CdkPortal } from '@angular/cdk/portal';
import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { onDrop } from 'src/app/core/models/onDrop';
import { CustomStyles } from 'src/app/core/models/styles';
import { FormItemService } from 'src/app/core/services/form-item.service';
import { PortalBridgeService } from 'src/app/core/services/portal-bridge.service';
import * as ElementActions from 'src/app/shared/actions/element.actions'
import { selectElement } from 'src/app/shared/selectors/element.selector';
import { ElementStyles } from 'src/app/shared/statesModels/elementStyles.state';

@Component({
  selector: 'app-second-section',
  templateUrl: './second-section.component.html',
  styleUrls: ['./second-section.component.scss']
})
export class SecondSectionComponent extends onDrop implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild(CdkPortal, { static: true })
  portalContent: CdkPortal
  activeItem$ = this.formItemService.element$
  styles: CustomStyles;

  activeElementWidth$: Observable<ElementStyles>

  height: string
  width: string
  fontWeight: string
  fontSize: string
  color: string
  borderStyle: string
  required: string
  placeholder: string

  @Input()
  used = [];
  constructor(
    private formItemService: FormItemService,
    private portalBridge: PortalBridgeService,
    private store: Store
  ) {
    super()
  }
  ngOnInit() {
    console.log('sda')
    this.activeElementWidth$ = this.store.select(selectElement)
    this.activeItem$.subscribe(el => {
      this.styles = this.getElementCurrentStyleValues();
      this.height = this.styles.height
      this.width = this.styles.width
      this.fontWeight = this.styles.fontWeight
      this.fontSize = this.styles.fontSize
      this.color = this.styles.color
      this.borderStyle = this.styles.borderStyle
      this.required = this.styles.required
      this.placeholder = this.styles.placeholder
    })
  }
  ngAfterViewInit() {
    this.portalBridge.setPortal(this.portalContent)

  }
  ngOnDestroy(): void {
    this.portalContent.detach()
  }

  getElementCurrentStyleValues(): CustomStyles {
    console.log('i am called')
    this.store.dispatch(ElementActions.elementChangeStyles({
      styles: this.formItemService.getStyles()
    }))
    return this.formItemService.getStyles()
  }
  setElementCurrentStyleValues() {
    this.styles = {
      height: this.height,
      width: this.width,
      fontWeight: this.fontWeight,
      fontSize: this.fontSize,
      color: this.color,
      borderStyle: this.borderStyle,
      required: this.required,
      placeholder: this.placeholder,
    }
    this.store.dispatch(ElementActions.elementChangeSelfStyles({ styles: this.styles }))
    // this.formItemService.setStyles(this.styles)
  }

  changeActive(item: HTMLElement) {
    this.formItemService.setActiveElement(item)
  }
}
