import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { PushModule } from '@ngrx/component';
import { FormGeneralService } from '../../services/form-general.service';
import { PortalBridgeService } from '../../services/portal-bridge.service';
import { FirstSectionModule } from './first-section/first-section.module';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SecondSectionModule } from './second-section/second-section.module';
import { ThirdSectionModule } from './third-section/third-section.module';


@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
  ],
  imports: [
    NoopAnimationsModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    DragDropModule,
    PushModule,
    FirstSectionModule,
    MatButtonModule,
    SecondSectionModule,
    ThirdSectionModule
  ],
  exports: [],
  providers: [
    FormGeneralService,
    PortalBridgeService,
  ]
})
export class HomeModule { }
