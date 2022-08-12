import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { StyleService } from 'src/app/core/services/style.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @ViewChild('coreElement') coreElement: ElementRef<HTMLElement>
  constructor(private styleService: StyleService) { }


  clickEvent(){
    this.styleService.setCurrent(this.coreElement.nativeElement)
    // this.coreElement.nativeElement.remove()
  }
}
