
import * as AuthSelector from './auth.selector'

fdescribe('My Selectors', () => {
  it('shoud return false if token is already expired', () => {
    expect(AuthSelector.selectIsNotExpired.projector(Date.now() + 200)).toBeTrue();
    expect(AuthSelector.selectIsNotExpired.projector(Date.now() - 200)).toBeFalse();
  });
  it('shoud return false if user is not logged in', () => {
    expect(AuthSelector.selectIsLoggedIn.projector('str', true)).toBeTrue();
    expect(AuthSelector.selectIsLoggedIn.projector('str', false)).toBeFalse();
    expect(AuthSelector.selectIsLoggedIn.projector(null, true)).toBeFalse();
    expect(AuthSelector.selectIsLoggedIn.projector(null, false)).toBeFalse();
  });
});