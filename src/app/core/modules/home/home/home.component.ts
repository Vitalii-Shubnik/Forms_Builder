import { Component, ElementRef, ViewChild } from '@angular/core';
import {  CdkDropList} from '@angular/cdk/drag-drop';
import { AvailableItems } from '../../../enums/availableItem';
import { StyleService } from '../../../services/style.service';
import { CustomStyles } from '../../../models/styles';
import { Observable } from 'rxjs';
import { TemplatePortal } from '@angular/cdk/portal';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
})
export class HomeComponent  {
  @ViewChild('customForm') form: ElementRef<CdkDropList>;

  portal$: Observable<TemplatePortal>

  constructor(
    private styleService: StyleService,
  ) {
    this.styleService.currentElement.subscribe(el => {
      el.setAttribute('placeholder', Math.random().toString())
      this.current = styleService.getElementCurrentStyleValues(el)
    })
  }
  // ngOnInit(): void {
  //   this.portal$ = this.portalBridge.portal$
  // }

  used = [];
  current: CustomStyles;
  available = [AvailableItems.input,
  AvailableItems.select,
  AvailableItems.textarea,
  AvailableItems.button,
  AvailableItems.checkbox];


}



