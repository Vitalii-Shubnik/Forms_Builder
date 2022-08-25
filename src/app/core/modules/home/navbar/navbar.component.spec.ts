import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { NavbarComponent } from './navbar.component';
import { selectAuthUsername, selectIsLoggedIn } from 'src/app/shared/selectors/auth.selector';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { MemoizedSelector } from '@ngrx/store';
import { PushModule } from '@ngrx/component';
import { logout } from 'src/app/shared/actions/auth.actions';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let mockStore: MockStore;
  let selectMockUsernameSelector: MemoizedSelector<object, string>;
  let selectMockIsLoggedSelector: MemoizedSelector<object, boolean>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      imports: [PushModule],
      providers: [provideMockStore()]
    })
      .compileComponents();
    fixture = TestBed.createComponent(NavbarComponent);
    mockStore = TestBed.inject(MockStore);
  });

  it('should display username', () => {
    selectMockIsLoggedSelector = mockStore.overrideSelector(
      selectIsLoggedIn,
      true
    )
    selectMockUsernameSelector = mockStore.overrideSelector(
      selectAuthUsername,
      'user1'
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
    const span: HTMLElement = fixture.nativeElement.querySelector('span')
    expect(span?.textContent).toContain('user1')
  })

  it('should emit logout', () => {
    pending()
    // const testUserData = { token: 'any', username: 'any', expiresIn: 'any', id: 22 }
    // localStorage.setItem('user', JSON.stringify(testUserData))
    // logout()
    // let result = localStorage.getItem('user')
    // expect(result).toBeFalsy()
  })
  it('should create', () => {
    pending()
    // expect(component).toBeTruthy();
  });
});
