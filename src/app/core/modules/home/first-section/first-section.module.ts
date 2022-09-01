import { PortalModule } from '@angular/cdk/portal'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'
import { MatExpansionModule } from '@angular/material/expansion'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import { LetModule, PushModule } from '@ngrx/component'
import { IsNotEmptyObjModule } from 'src/app/core/pipes/is-not-empty-obj.module'
import { FirstSectionComponent } from './first-section.component'
import { FormGeneralStylesComponent } from './form-general-styles/form-general-styles.component'


@NgModule({
  declarations: [
    FirstSectionComponent,
    FormGeneralStylesComponent,
  ],
  imports: [
    NoopAnimationsModule,
    PortalModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatExpansionModule,
    PushModule,
    MatFormFieldModule,
    IsNotEmptyObjModule,
    LetModule,
  ],
  exports: [
    FirstSectionComponent,
  ]
})
export class FirstSectionModule { }
