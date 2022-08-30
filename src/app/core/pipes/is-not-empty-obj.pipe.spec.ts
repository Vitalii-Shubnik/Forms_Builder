import { IsNotEmptyObjPipe } from './is-not-empty-obj.pipe'

fdescribe('IsEmptyObjPipe', () => {
  let pipe: IsNotEmptyObjPipe
  beforeEach(() => {
    pipe = new IsNotEmptyObjPipe()
  })

  it('should check if the value is not an empty object', () => {
    expect(pipe.transform({})).toBeFalse()
    expect(pipe.transform({ anykey: 'dsa' })).toBeTrue()
    expect(pipe.transform(null)).toBeFalse()
    expect(pipe.transform(undefined)).toBeFalse()
    expect(pipe.transform([])).toBeFalse()
  })

  it('create an instance', () => {
    expect(pipe).toBeTruthy()
  })
})
