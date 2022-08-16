import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormItemService } from 'src/app/core/services/form-item.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @ViewChild('coreElement') coreElement: ElementRef<HTMLElement>
  constructor(private formItems: FormItemService) { }
  @Input() disabled: boolean


  clickEvent(){
    this.formItems.setActiveElement(this.coreElement.nativeElement)
  }

}
