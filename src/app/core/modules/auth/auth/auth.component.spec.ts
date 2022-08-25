import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { PushModule } from '@ngrx/component';
import { StoreModule } from '@ngrx/store';
import { AuthService } from 'src/app/core/services/auth.service';
import { authReducer } from 'src/app/shared/reducers/auth.reducer';

import { AuthComponent } from './auth.component';

describe('AuthComponent', () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AuthComponent, 
      ],
      imports: [
        NoopAnimationsModule,
        BrowserAnimationsModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        PushModule,
        StoreModule.forRoot({
          auth: authReducer,
        }, {}),
      ],
      providers: [
        HttpClient,
        AuthService,
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
