import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CdkDragDrop, CdkDropList, copyArrayItem, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { AvailableItems } from '../../../enums/availableItem';
import { StyleService } from '../../../services/style.service';
import { Renderer2 } from '@angular/core';
import { CustomStyles } from '../../../models/styles';
import { PortalBridgeService } from 'src/app/core/services/portal-bridge.service';
import { Observable } from 'rxjs';
import { TemplatePortal } from '@angular/cdk/portal';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild('customForm') form: ElementRef<CdkDropList>;

  portal$: Observable<TemplatePortal>

  constructor(
    private styleService: StyleService,
    private renderer: Renderer2,
    private portalBridge: PortalBridgeService
  ) {
    this.styleService.currentElement.subscribe(el => {
      el.setAttribute('placeholder', Math.random().toString())
      this.current = styleService.getElementCurrentStyleValues(el)
    })
  }
  ngOnInit(): void {
    this.portal$ = this.portalBridge.portal$
  }

  used = [];
  current: CustomStyles;
  available = [AvailableItems.input,
  AvailableItems.select,
  AvailableItems.textarea,
  AvailableItems.button,
  AvailableItems.checkbox];


}



