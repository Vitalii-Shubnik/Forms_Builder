import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { StoreModule } from '@ngrx/store';
import { authReducer } from './shared/reducers/auth.reducer';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './core/modules/auth/auth.module';
import { HomeModule } from './core/modules/home/home.module';
import { elementStylesReducer } from './shared/reducers/elementStyles.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './shared/effects/auth.effects';
import { ElementStylesEffects } from './shared/effects/elementStyles.effects';
import { PortalModule } from '@angular/cdk/portal';

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
    PortalModule, 
    StoreModule.forRoot({
      auth: authReducer,
      elementStyles: elementStylesReducer,
    }, {}),
    EffectsModule.forRoot([AuthEffects, ElementStylesEffects]),
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
