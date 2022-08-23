import { DragDropModule } from '@angular/cdk/drag-drop';
import { PortalModule } from '@angular/cdk/portal';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { PushModule } from '@ngrx/component';
import { FirstSectionComponent } from './first-section/first-section.component';
import { FormElementsModule } from './form-elements/form-elements.module';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ThirdSectionComponent } from './third-section/third-section.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component'
import { MatFormFieldModule } from '@angular/material/form-field';
import { SecondSectionModule } from './second-section/second-section.module';
import { DroplistComponent } from './droplist/droplist.component';
import { ThirdSectionModule } from './third-section/third-section.module';

@NgModule({
  declarations: [
    HomeComponent,
    FirstSectionComponent,
    NavbarComponent,
    EditDialogComponent,

  ],
  imports: [
    FormElementsModule,
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
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    SecondSectionModule,
    ThirdSectionModule
  ],
  exports:[
  ],
  providers: []
})
export class HomeModule { }
