import { DragDropModule } from '@angular/cdk/drag-drop';
import { PortalModule } from '@angular/cdk/portal';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { PushModule } from '@ngrx/component';
import { SecondSectionComponent } from './second-section.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormElementsModule } from '../form-elements/form-elements.module';
import { CommonModule } from '@angular/common';
import { DroplistModule } from '../droplist/droplist.module';
import { EditFieldComponent } from './edit-field/edit-field.component';
import { IsNotEmptyObjPipe } from 'src/app/core/pipes/is-not-empty-obj.pipe';
// import { DroplistComponent } from '../droplist/droplist.component';

@NgModule({
  declarations: [
    // DroplistComponent,
    SecondSectionComponent,
    EditFieldComponent,
    IsNotEmptyObjPipe,
  ],
  imports: [
    CommonModule,
    FormElementsModule,
    PortalModule,
    DragDropModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    FormsModule,
    MatExpansionModule,
    PushModule,
    MatIconModule,
    MatFormFieldModule,
    DroplistModule,
  ],
  exports:[
    SecondSectionComponent
  ]
})
export class SecondSectionModule { }
