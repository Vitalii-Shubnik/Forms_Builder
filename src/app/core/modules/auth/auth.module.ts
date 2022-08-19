import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './login/auth.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { LetModule, PushModule } from '@ngrx/component';
import { AuthService } from 'src/app/core/services/auth.service'
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ContentApplicationJsonInterceptor } from 'src/app/core/interceptors/content-application-json.interceptor';
import { LogoutComponent } from './logout/logout.component';
import { SignInComponent } from './sign-in/sign-in.component';



@NgModule({
  declarations: [
    AuthComponent, 
    LogoutComponent,
    SignInComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    PushModule,
    LetModule,
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
