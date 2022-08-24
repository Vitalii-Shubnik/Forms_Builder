import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGeneralStylesComponent } from './form-general-styles.component';

describe('FormGeneralStylesComponent', () => {
  let component: FormGeneralStylesComponent;
  let fixture: ComponentFixture<FormGeneralStylesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormGeneralStylesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormGeneralStylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
