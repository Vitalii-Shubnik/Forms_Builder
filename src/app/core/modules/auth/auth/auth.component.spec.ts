import { CommonModule } from '@angular/common'
import { Component, EventEmitter, Input, Output } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { FormBuilder, FormGroup } from '@angular/forms'
import { PushModule } from '@ngrx/component'
import { Store } from '@ngrx/store'
import { of } from 'rxjs'
import { authMethodEnum } from 'src/app/core/enums/authMethod'
import { loginRequest, logout } from 'src/app/shared/actions/auth.actions'
import { selectAuthUsername, selectIsLoggedIn } from 'src/app/shared/selectors/auth.selector'
import { AuthComponent } from './auth.component'

@Component({
  selector: 'app-login',
  template: '<p>Mock Login Component</p>'
})
class MockLoginComponent {
  @Input() form: FormGroup
}

@Component({
  selector: 'app-logout',
  template: '<p>Mock Logout Component</p>'
})
class MockLogoutComponent {
  @Input() userName: string
  @Output() logout = new EventEmitter<void>()
}

fdescribe('AuthComponent', () => {
  let component: AuthComponent
  let fixture: ComponentFixture<AuthComponent>
  let mockStore: any
  beforeEach(async () => {
    mockStore = jasmine.createSpyObj('Store', ['select', 'dispatch'])
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
        { provide: Store, useValue: mockStore }
      ]
    })
      .compileComponents()
    fixture = TestBed.createComponent(AuthComponent)
    component = fixture.componentInstance
  })

  it('should dispatch logout action', () => {
    mockStore.select
      .withArgs(selectAuthUsername).and.returnValue(of('user1'))
      .withArgs(selectIsLoggedIn).and.returnValue(of(true))
    fixture.detectChanges()
    const logoutSelector = fixture.nativeElement.querySelector('app-logout')
    expect(logoutSelector).toBeTruthy()
    logoutSelector.dispatchEvent(new Event('logout'))
    expect(mockStore.dispatch).toHaveBeenCalledOnceWith(logout())
  })

  it('should dispatch login request action', () => {
    mockStore.select
      .withArgs(selectAuthUsername).and.returnValue(of(null))
      .withArgs(selectIsLoggedIn).and.returnValue(of(false))
    fixture.detectChanges()
    const loginSelector = fixture.nativeElement.querySelector('app-login')
    expect(loginSelector).toBeTruthy()
    component.login('user1', 'password', authMethodEnum.login)
    expect(mockStore.dispatch).toHaveBeenCalledOnceWith(loginRequest({ authMethod: authMethodEnum.login, password: 'password', username: 'user1' }))
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
