import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThirdSectionComponent } from './third-section.component';
import { FormElementsModule } from '../form-elements/form-elements.module';
import { PortalModule } from '@angular/cdk/portal';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { PushModule } from '@ngrx/component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { DroplistComponent } from '../droplist/droplist.component';
import { DroplistModule } from '../droplist/droplist.module';



@NgModule({
  declarations: [
    // DroplistComponent,
    ThirdSectionComponent,
  ],
  imports: [
    CommonModule,
    FormElementsModule,
    PortalModule,
    DragDropModule,
    MatInputModule,
    MatSelectModule,
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
  exports: [
    ThirdSectionComponent
  ]
})
export class ThirdSectionModule { }
