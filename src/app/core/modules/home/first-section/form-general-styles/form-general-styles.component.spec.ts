import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { IsNotEmptyObjModule } from 'src/app/core/pipes/is-not-empty-obj.module';

import { FormGeneralStylesComponent } from './form-general-styles.component';

fdescribe('FormGeneralStylesComponent', () => {
  let component: FormGeneralStylesComponent;
  let fixture: ComponentFixture<FormGeneralStylesComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormGeneralStylesComponent],
      imports: [
        MatInputModule,
        MatButtonModule,
        MatFormFieldModule,
        IsNotEmptyObjModule,
        FormsModule,
        NoopAnimationsModule
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FormGeneralStylesComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit on click', () => {
    component.styles = { backgroundColor: 'black' }
    fixture.detectChanges()
    spyOn(component.stylesChanged, 'emit')
    const button: HTMLElement = fixture.nativeElement.querySelector('button');
    button.dispatchEvent(new Event('click'));
    expect(component.stylesChanged.emit).toHaveBeenCalledOnceWith()
  })

  it('should emit click', () => {
    component.styles = { backgroundColor: 'black' }
    fixture.detectChanges()
    spyOn(component.stylesChanged, 'emit')
    const button: HTMLElement = fixture.nativeElement.querySelector('button');
    button.dispatchEvent(new Event('click'));
    expect(component.stylesChanged.emit).toHaveBeenCalledOnceWith()
  })

  it('should display provided form fields', () => {
    component.styles = { backgroundColor: 'black', border: '1px solid cyan' }
    fixture.detectChanges()
    let formFields: HTMLElement[] = fixture.nativeElement.querySelectorAll('mat-form-field');
    expect(formFields.length).toBe(2)
  })
});
