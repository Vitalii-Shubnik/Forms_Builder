import { CommonModule } from '@angular/common'
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'
import { MatInputModule } from '@angular/material/input'
import { LetModule, PushModule } from '@ngrx/component'
import { ContentApplicationJsonInterceptor } from 'src/app/core/interceptors/content-application-json.interceptor'
import { AuthService } from 'src/app/core/services/auth.service'
import { AuthComponent } from './auth/auth.component'
import { LoginComponent } from './login/login.component'
import { LogoutComponent } from './logout/logout.component'


@NgModule({
  declarations: [
    AuthComponent,
    LogoutComponent,
    LoginComponent],
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
