import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { MatIconModule } from '@angular/material/icon'
import { MatSelectModule } from '@angular/material/select'
import { PushModule } from '@ngrx/component'
import { DroplistModule } from '../droplist/droplist.module'
import { ThirdSectionComponent } from './third-section.component'


@NgModule({
  declarations: [
    ThirdSectionComponent,
  ],
  imports: [
    CommonModule,
    MatSelectModule,
    PushModule,
    MatIconModule,
    DroplistModule,
  ],
  exports: [
    ThirdSectionComponent
  ]
})
export class ThirdSectionModule { }
