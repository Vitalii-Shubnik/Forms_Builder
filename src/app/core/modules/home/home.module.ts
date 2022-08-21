import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { InputComponent } from './form-elements/input/input.component';
import { TextareaComponent } from './form-elements/textarea/textarea.component';
import { SelectComponent } from './form-elements/select/select.component';
import { CheckboxComponent } from './form-elements/checkbox/checkbox.component';
import { ButtonComponent } from './form-elements/button/button.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { PortalModule } from '@angular/cdk/portal';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FirstSectionComponent } from './first-section/first-section.component';
import { SecondSectionComponent } from './second-section/second-section.component';
import { ThirdSectionComponent } from './third-section/third-section.component';
import { MatSelectModule } from '@angular/material/select'
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { NavbarComponent } from './navbar/navbar.component';
import { PushModule } from '@ngrx/component';

@NgModule({
  declarations: [
    HomeComponent,
    InputComponent,
    TextareaComponent,
    SelectComponent,
    CheckboxComponent,
    ButtonComponent,
    FirstSectionComponent,
    SecondSectionComponent,
    ThirdSectionComponent,
    NavbarComponent,
  ],
  imports: [
    NoopAnimationsModule,
    BrowserAnimationsModule,
    PortalModule,
    DragDropModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    FormsModule,
    MatExpansionModule,
    PushModule,
  ],
  providers: []
})
export class HomeModule { }
