import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './core/services/auth.service';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { StylesPipe } from './core/pipes/styles.pipe';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { authReducer } from './shared/reducers/auth.reducer';
import { AuthEffects } from './shared/effects/auth.effects';
import { BoolToStringPipe } from './core/pipes/bool-to-string.pipe';
import { LetModule, PushModule } from '@ngrx/component';
import { ContentApplicationJsonInterceptor } from './core/interceptors/content-application-json.interceptor';
import { LoginComponent } from './core/components/login/login.component';
import { HomeComponent } from './core/components/home/home.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    AppComponent,
    InputComponent,
    SelectorComponent,
    TextareaComponent,
    SelectComponent,
    CheckboxComponent,
    ButtonComponent,
    StylesPipe,
    BoolToStringPipe,
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatInputModule,
    ToastrModule.forRoot(),
    PortalModule,
    DragDropModule,
    StoreModule.forRoot({ auth: authReducer }, {}),
    EffectsModule.forRoot([AuthEffects]),
    LetModule,
    PushModule,
    AppRoutingModule
  ],
  exports: [],
  providers: [
    AuthService,
    HttpClient,
    StyleService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ContentApplicationJsonInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
