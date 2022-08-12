import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { LetModule, PushModule } from '@ngrx/component';
import { AuthService } from 'src/app/core/services/auth.service'
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ContentApplicationJsonInterceptor } from 'src/app/core/interceptors/content-application-json.interceptor';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from 'src/app/shared/effects/auth.effects';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    PushModule,
    LetModule,
    EffectsModule.forRoot([AuthEffects]),
  ],
  exports: [],
  providers: [
    AuthService,
    HttpClient,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ContentApplicationJsonInterceptor,
      multi: true
    },
  ]
})
export class AuthModule { }
