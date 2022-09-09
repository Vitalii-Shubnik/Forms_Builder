import { ComponentFixture, TestBed } from '@angular/core/testing'
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import { IsNotEmptyObjModule } from 'src/app/core/pipes/is-not-empty-obj.module'
import { VariableExistsModule } from 'src/app/core/pipes/variable-exists.module'
import { FormGeneralStylesComponent } from './form-general-styles.component'

fdescribe('FormGeneralStylesComponent', () => {
  let component: FormGeneralStylesComponent
  let fixture: ComponentFixture<FormGeneralStylesComponent>
  const fb = new FormBuilder()
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormGeneralStylesComponent],
      imports: [
        MatInputModule,
        MatButtonModule,
        MatFormFieldModule,
        IsNotEmptyObjModule,
        FormsModule,
        NoopAnimationsModule,
        VariableExistsModule,
        ReactiveFormsModule,    
      ],
      providers: [
      ]
    })
      .compileComponents()

    fixture = TestBed.createComponent(FormGeneralStylesComponent)
    component = fixture.componentInstance
    const form: FormGroup = fb.group({
      'border': [null],
      'fontStyle': [null],
      'backgroundColor': [null]
    })
    component.form = form
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should emit click', () => {
    component.form.setValue({ border:'', fontStyle:'', backgroundColor: 'black' })
    fixture.detectChanges()
    spyOn(component.stylesChanged, 'emit')
  })

  it('should display provided form fields', () => {
    component.form.setValue({ fontStyle:'', backgroundColor: 'black', border: '1px solid cyan' })
    fixture.detectChanges()
    let formFields: HTMLElement[] = fixture.nativeElement.querySelectorAll('mat-form-field')
    expect(formFields.length).toBe(3)
  })
})
