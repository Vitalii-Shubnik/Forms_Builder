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
  available = [AvailableItems.input,
  AvailableItems.select,
  AvailableItems.textarea,
  AvailableItems.button,
  AvailableItems.checkbox];
}



