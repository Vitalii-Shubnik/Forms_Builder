import { VariableExistsPipe } from './variable-exists.pipe';

describe('VariableExistPipe', () => {
  it('create an instance', () => {
    const pipe = new VariableExistsPipe();
    expect(pipe).toBeTruthy();
  });
});
