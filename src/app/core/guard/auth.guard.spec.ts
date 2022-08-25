import { TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { cold } from 'jasmine-marbles';
import { AuthGuard } from './auth.guard';

describe('AuthguardGuard', () => {

  let guard: AuthGuard;
  // let store: MockStore<{ token: string, expiresIn: number }>;
  // const initialState = {
  //   token: null,
  //   expiresIn: null,
  // };
  // beforeEach(() => {
  //   TestBed.configureTestingModule({
  //     imports: [
  //     ],
  //     providers: [
  //       AuthGuard,
  //       provideMockStore({ initialState })
  //     ],
  //   });
  //   store = TestBed.get<Store>(Store);
  //   // guard = TestBed.get<AuthGuard>(AuthGuard);

  //   guard = TestBed.inject(AuthGuard);
  // });
  // it('should return false if the user state is not logged in', () => {
  //   const expected = cold('(a|)', { a: true });

  //   expect(guard.canActivate()).toBeObservable(expected);
  // });

  // it('should return true if the user state is logged in', () => {
  //   store.setState({ token: 'string', expiresIn: 16614374322740});

  //   const expected = cold('(a|)', { a: true });

  //   expect(guard.canActivate()).toBeObservable(expected);
  // });
  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
