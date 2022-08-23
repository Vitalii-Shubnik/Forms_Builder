import { IsNotEmptyObjPipe } from './is-not-empty-obj.pipe';

describe('IsEmptyObjPipe', () => {
  it('create an instance', () => {
    const pipe = new IsNotEmptyObjPipe();
    expect(pipe).toBeTruthy();
  });
});
