import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { authMethodEnum } from 'src/app/core/enums/authMethod';
import { DumbComponent } from 'src/app/core/models/dumbComponent';
import { AuthFormValues } from 'src/app/core/models/formValues';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignInComponent extends DumbComponent {
  authMethod: authMethodEnum = authMethodEnum.login
  @Input() form: FormGroup
  @Output()
  signIn = new EventEmitter<AuthFormValues>()
  @Output()
  switchMethod = new EventEmitter<authMethodEnum>()
  constructor() {
    super()
  }
  // toggleSwitchMethod(authMethod: authMethodEnum): void {
  // }
  signInClick() {
    this.signIn.emit({
      email: this.form?.value?.email,
      password: this.form?.value?.password,
      authMethod: this.authMethod
    })
  }
  toggleSwitchMethod() {
    // this.switchMethod.emit(authMethodEnum.register)
    this.authMethod === 'Login' ? this.authMethod = authMethodEnum.register : this.authMethod = authMethodEnum.login 
  }
}
