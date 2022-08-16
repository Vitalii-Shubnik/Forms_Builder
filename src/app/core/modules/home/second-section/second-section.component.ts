import { CdkPortal } from '@angular/cdk/portal';
import { AfterContentChecked, AfterViewInit, Component, Input, OnDestroy, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { onDrop } from 'src/app/core/models/onDrop';
import { CustomStyles } from 'src/app/core/models/styles';
import { FormItemService } from 'src/app/core/services/form-item.service';
import { PortalBridgeService } from 'src/app/core/services/portal-bridge.service';
import { StyleService } from 'src/app/core/services/style.service';
import * as ElementActions from 'src/app/shared/actions/element.actions'
import { selectElement, selectElementWidth } from 'src/app/shared/selectors/element.selector';
@Component({
  selector: 'app-second-section',
  templateUrl: './second-section.component.html',
  styleUrls: ['./second-section.component.scss']
})
export class SecondSectionComponent extends onDrop implements  OnDestroy, AfterViewInit {
  @ViewChild(CdkPortal, { static: true })
  portalContent: CdkPortal
  current: CustomStyles;
  isSingleClick: Boolean = true;
  activeItem$ = this.activeItem.element$
  currentElement: HTMLElement;
  styles: CustomStyles;

  activeElementWidth$

  @Input()
  used = [];
  constructor(
    private activeItem: FormItemService,
    private styleService: StyleService,
    private portalBridge: PortalBridgeService,
    private store: Store
  ) {
    super()
    // this.styleService.currentElement.subscribe(el => {
    //   el.setAttribute('placeholder', Math.random().toString())
    //   this.current = styleService.getElementCurrentStyleValues(el)
    // })
  }

  getElementCurrentStyleValues(el: HTMLElement): CustomStyles {
    console.log('i am called')
    this.store.dispatch(ElementActions.elementChangeStyles({styles: {
      width: window.getComputedStyle(el).width || '',
      height: window.getComputedStyle(el).height || '',
      placeholder: el.getAttribute('placeholder') || '',
      required: el.getAttribute('required') || '',
      fontSize: window.getComputedStyle(el).fontSize || '',
      fontWeight: window.getComputedStyle(el).fontWeight || '',
      color: window.getComputedStyle(el).color || '',
      borderStyle: window.getComputedStyle(el).borderStyle || ''
    }}))
    return {
      width: window.getComputedStyle(el).width || '',
      height: window.getComputedStyle(el).height || '',
      placeholder: el.getAttribute('placeholder') || '',
      required: el.getAttribute('required') || '',
      fontSize: window.getComputedStyle(el).fontSize || '',
      fontWeight: window.getComputedStyle(el).fontWeight || '',
      color: window.getComputedStyle(el).color || '',
      borderStyle: window.getComputedStyle(el).borderStyle || ''
    }
  }
  setElementCurrentStyleValues() {
    this.currentElement.style.width = this.styles.width
    this.currentElement.style.height = this.styles.height
    this.currentElement.style.fontSize = this.styles.fontSize
    this.currentElement.style.fontWeight = this.styles.fontWeight
    this.currentElement.style.color = this.styles.color
    this.currentElement.style.borderStyle = this.styles.borderStyle
    this.currentElement.setAttribute('placeholder', this.styles.placeholder)
    this.currentElement.setAttribute('required', this.styles.required)
  }
  ngAfterViewInit() {
    this.activeItem$.subscribe(el => {
      this.currentElement = el
      this.styles = this.getElementCurrentStyleValues(el)
    })
    this.portalBridge.setPortal(this.portalContent)
    this.activeElementWidth$ = this.store.select(selectElement)
  }
  ngOnDestroy(): void {
    this.portalContent.detach()
  }
  changeActive(item: HTMLElement) {
    this.activeItem.setActiveElement(item)
  }
}
