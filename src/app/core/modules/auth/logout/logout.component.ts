import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { DumbComponent } from 'src/app/core/models/dumbComponent';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogoutComponent extends DumbComponent{
  @Input() userName: string = null
  @Output() logout = new EventEmitter()

  constructor() { 
    super()
  }

  logoutClick(){
    this.logout.emit()
  }
}
