import { Action } from '@ngrx/store'
import { elementStylesReducer, initialElement } from './elementStyles.reducer'
import { elementChangeStyles } from '../actions/elementStyles.actions'

fdescribe('Element Styles Reducer', () => {
  let action: Action

  beforeEach(() => {
    action = null
  })

  it('should return initial value after unexisting action', () => {
    const initial = initialElement
    action = { type: 'not real' }
    expect(elementStylesReducer(initial, action)).toEqual(initialElement)
  })

  it('should return override value after login success', () => {
    const initial = initialElement
    action = elementChangeStyles({ styles: { fontSize: '300', color: 'rgb(0,0,224)' } })
    expect(elementStylesReducer(initial, action)).toEqual({ fontSize: '300', color: 'rgb(0,0,224)' })

    action = elementChangeStyles({ styles: { color: 'rgb(0,0,224)', placeholder: '123' } })
    expect(elementStylesReducer({ fontSize: '300' }, action)).toEqual({ color: 'rgb(0,0,224)', placeholder: '123' })

    action = elementChangeStyles({ styles: { fontSize: '400', color: 'rgb(0,0,224)', placeholder: '123' } })
    expect(elementStylesReducer({ fontSize: '300' }, action)).toEqual({ fontSize: '400', color: 'rgb(0,0,224)', placeholder: '123' })
  })
})