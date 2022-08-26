import { TestBed } from "@angular/core/testing"
import { MockStore, provideMockStore } from "@ngrx/store/testing"
import { Observable } from "rxjs"
import { ElementStyles } from "../statesModels/elementStyles.state"
import { ElementStylesEffects } from "./elementStyles.effects"
import { provideMockActions } from '@ngrx/effects/testing'
import { FormItemService } from "src/app/core/services/form-item.service"
import { TestScheduler } from "rxjs/testing"
import { elementChangeSelfStyles, elementChangeStyles } from "../actions/elementStyles.actions"

fdescribe('Element Styles Effects', () => {
  const initialState = null
  let formItemService = jasmine.createSpyObj('FormItemService', ['setStyles'])
  let effects: ElementStylesEffects
  let actions$: Observable<any>
  let store: MockStore<ElementStyles>
  let testScheduler: TestScheduler

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ElementStylesEffects,
        provideMockStore({ initialState }),
        provideMockActions(() => actions$),
        { provide: FormItemService, useValue: formItemService }
      ]
    })
    effects = TestBed.inject(ElementStylesEffects)
    store = TestBed.inject(MockStore)
    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected)
    })
  })

  //creation
  it('should be created', () => {
    expect(effects).toBeTruthy()
  })

  //changeElementStyles$
  it('should change styles', () => {
    const styles: ElementStyles = { color: 'rgb(83,0,41)', height: '300px' }
    const action = elementChangeSelfStyles({ styles })
    const outcome = elementChangeStyles({ styles })
    testScheduler.run(({ hot, expectObservable }) => {
      actions$ = hot('-a-b--c', { a: action, b: outcome, c: action })
      expectObservable(effects.changeElementStyles$).toBe('-a----c', { a: outcome, c: outcome })
    })
    expect(formItemService.setStyles).toHaveBeenCalledTimes(2)
  })
})