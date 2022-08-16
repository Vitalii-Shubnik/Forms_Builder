import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormItemService } from 'src/app/core/services/form-item.service';
import { StyleService } from 'src/app/core/services/style.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @ViewChild('coreElement') coreElement: ElementRef<HTMLElement>
  constructor(private formItems: FormItemService) { }
  @Input() disabled: boolean


  clickEvent(){
    this.formItems.setActiveElement(this.coreElement.nativeElement)
  }
}
