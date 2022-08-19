import { Component, ElementRef, ViewChild } from '@angular/core';
import { CdkDropList } from '@angular/cdk/drag-drop';
import { AvailableItems } from '../../../enums/availableItem';
import { Observable } from 'rxjs';
import { TemplatePortal } from '@angular/cdk/portal';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
})
export class HomeComponent {
  @ViewChild('customForm') form: ElementRef<CdkDropList>;

  portal$: Observable<TemplatePortal>

  constructor() { }
  used = [];
  available = [{ type: AvailableItems.input, data: '' },
  { type: AvailableItems.select, data: [] },
  { type: AvailableItems.textarea, data: '' },
  { type: AvailableItems.input, data: '' },
  { type: AvailableItems.input, data: '' },
  { type: AvailableItems.button, data: '' },
  { type: AvailableItems.checkbox, data: '' }];
}



