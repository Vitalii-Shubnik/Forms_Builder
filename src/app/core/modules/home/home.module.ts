import { NgModule } from '@angular/core';
import { StyleService } from '../../services/style.service';
import { HomeComponent } from './home/home.component';
import { InputComponent } from './form-elements/input/input.component';
import { SelectorComponent } from './selector/selector.component';
import { TextareaComponent } from './form-elements/textarea/textarea.component';
import { SelectComponent } from './form-elements/select/select.component';
import { CheckboxComponent } from './form-elements/checkbox/checkbox.component';
import { ButtonComponent } from './form-elements/button/button.component';
import { StylesPipe } from '../../pipes/styles.pipe';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { PortalModule } from '@angular/cdk/portal';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FirstSectionComponent } from './first-section/first-section.component';
import { SecondSectionComponent } from './second-section/second-section.component';
import { ThirdSectionComponent } from './third-section/third-section.component';


@NgModule({
  declarations: [
    HomeComponent,
    InputComponent,
    SelectorComponent,
    TextareaComponent,
    SelectComponent,
    CheckboxComponent,
    ButtonComponent,
    StylesPipe,
    FirstSectionComponent,
    SecondSectionComponent,
    ThirdSectionComponent,
  ],
  imports: [
    NoopAnimationsModule,
    BrowserAnimationsModule,
    PortalModule,
    DragDropModule,
  ],
  providers: [
    StyleService
  ]
})
export class HomeModule { }
