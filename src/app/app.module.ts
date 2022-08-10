import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './core/components/home/home.component';
import { LoginComponent } from './core/components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './core/services/auth.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './core/guard/auth.guard';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input'
import { ToastrModule } from 'ngx-toastr';
import { PortalModule } from '@angular/cdk/portal'
import { DragDropModule } from '@angular/cdk/drag-drop';
import { InputComponent } from './core/components/form-elements/input/input.component';
import { SelectorComponent } from './core/components/selector/selector.component';
import { TextareaComponent } from './core/components/form-elements/textarea/textarea.component';
import { SelectComponent } from './core/components/form-elements/select/select.component';
import { CheckboxComponent } from './core/components/form-elements/checkbox/checkbox.component';
import { ButtonComponent } from './core/components/form-elements/button/button.component';
import { StyleService } from './core/services/style.service';
const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'authenticate', component: LoginComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    InputComponent,
    SelectorComponent,
    TextareaComponent,
    SelectComponent,
    CheckboxComponent,
    ButtonComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    NoopAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatInputModule,
    ToastrModule.forRoot(),
    PortalModule,
    DragDropModule,
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
  ],
  providers: [
    AuthService,
    HttpClient,
    StyleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
