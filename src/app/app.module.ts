import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { StoreModule } from '@ngrx/store';
import { authReducer } from './shared/reducers/auth.reducer';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './core/modules/auth/auth.module';
import { HomeModule } from './core/modules/home/home.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AuthModule,
    HomeModule,
    AppRoutingModule,
    BrowserModule,
    ToastrModule.forRoot(),
    StoreModule.forRoot({ auth: authReducer }, {}),
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
