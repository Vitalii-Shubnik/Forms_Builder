import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { StoreModule } from '@ngrx/store';
import { authReducer } from './shared/reducers/auth.reducer';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './core/modules/auth/auth.module';
import { HomeModule } from './core/modules/home/home.module';
import { elementReducer } from './shared/reducers/element.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './shared/effects/auth.effects';
import { ElementEffects } from './shared/effects/element.actions';


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
    StoreModule.forRoot({
      auth: authReducer,
      element: elementReducer
    }, {}),
    EffectsModule.forRoot([AuthEffects, ElementEffects]),

  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
