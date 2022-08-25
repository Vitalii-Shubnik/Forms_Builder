import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { authMethodEnum } from 'src/app/core/enums/authMethod';

import { LoginComponent } from './login.component';

fdescribe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  const fb = new FormBuilder()

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MatInputModule
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;

  });

  it('should emit signIn', () => {
    const form: FormGroup = fb.group({
      email: ['some@gmail.com'],
      password: ['password']
    });
    component.form = form
    fixture.detectChanges();
    spyOn(component.signIn, 'emit')
    const button: HTMLElement = fixture.nativeElement.querySelector('button');
    button.dispatchEvent(new Event('click'));

    expect(component.signIn.emit).toHaveBeenCalledWith({ email: 'some@gmail.com', password: 'password', authMethod: authMethodEnum.login });
  })

  it('should change auth method', () => {
    component.toggleSwitchMethod()
    expect(component.authMethod).toBe(authMethodEnum.register)
    component.toggleSwitchMethod()
    expect(component.authMethod).toBe(authMethodEnum.login)
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
