import { TestBed } from '@angular/core/testing';
import { Router, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, of } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';
import { AuthGuard } from './auth.guard';

fdescribe('AuthguardGuard', () => {

  let guard: AuthGuard;
  let mockStore: any
  let mockRouter: any
  let testScheduler: TestScheduler
  beforeEach(() => {
    mockStore = jasmine.createSpyObj('Store', ['select'])
    mockRouter = jasmine.createSpyObj('Router', ['parseUrl'])
    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        { provide: Store, useValue: mockStore },
        { provide: Router, useValue: mockRouter }
      ]
    })
    guard = TestBed.inject(AuthGuard)
    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected)
    })
  })

  it('should return true when user is logged', () => {
    testScheduler.run(({ hot, expectObservable }) => {
      let select$ = hot('-a', { a: true })
      mockStore.select.and.returnValue(select$)
      const result = guard.canActivate()
      expectObservable(result).toBe('-b', { b: true })
    })
  })
  
  it('should return router url when user is logged out', () => {
    testScheduler.run(({ hot, expectObservable }) => {
      let select$ = hot('-a', { a: undefined })
      mockStore.select.and.returnValue(select$)
      const result = guard.canActivate()
      mockRouter.parseUrl.withArgs('/authenticate').and.returnValue('url/123')
      expectObservable(result).toBe('-b', { b: 'url/123' })
    })
    expect(mockRouter.parseUrl).toHaveBeenCalledOnceWith('/authenticate')
  })

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
