import { DragDropModule } from '@angular/cdk/drag-drop';
import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { PushModule } from '@ngrx/component';
import { IsNotEmptyObjModule } from 'src/app/core/pipes/is-not-empty-obj.module';
import { FormElDraggingService } from 'src/app/core/services/form-el-dragging.service';
import { FormItemService } from 'src/app/core/services/form-item.service';
import { DroplistModule } from '../droplist/droplist.module';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { EditFieldComponent } from './edit-field/edit-field.component';
import { EditFieldsComponent } from './edit-fields/edit-fields.component';
import { MainFormComponent } from './main-form/main-form.component';
import { SecondSectionComponent } from './second-section.component';


@NgModule({
  declarations: [
    SecondSectionComponent,
    EditFieldComponent,
    MainFormComponent,
    EditFieldsComponent,
    EditDialogComponent,
  ],
  imports: [
    CommonModule,
    PortalModule,
    DragDropModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule,
    PushModule,
    MatIconModule,
    MatFormFieldModule,
    DroplistModule,
    IsNotEmptyObjModule,
    MatDialogModule,
  ],
  exports: [
    SecondSectionComponent
  ],
  providers:[
    FormItemService,
    FormElDraggingService
  ]
})
export class SecondSectionModule { }
