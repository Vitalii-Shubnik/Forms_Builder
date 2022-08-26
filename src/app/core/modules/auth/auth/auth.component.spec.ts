import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { PushModule } from '@ngrx/component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { AuthState } from 'src/app/shared/statesModels/auth.state';

import { AuthComponent } from './auth.component';
@Component({
  selector: 'app-login',
  template: '<p>Mock Login Component</p>'
})
class MockLoginComponent {
  @Input() form: any
}

@Component({
  selector: 'app-logout',
  template: '<p>Mock Logout Component</p>'
})
class MockLogoutComponent {

}

describe('AuthComponent', () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;
  const initialState = null
  let store: MockStore<AuthState>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AuthComponent,
        MockLoginComponent,
        MockLogoutComponent
      ],
      imports: [
        CommonModule,
        PushModule,
      ],
      providers: [
        FormBuilder,
        provideMockStore({ initialState }),
      ]
    })
      .compileComponents();
    fixture = TestBed.createComponent(AuthComponent);
    store = TestBed.inject(MockStore)

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
