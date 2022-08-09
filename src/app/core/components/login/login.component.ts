import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { authMethodEnum } from '../../enums/authMethod';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(
    private fb: FormBuilder,
    public authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {

    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  form: FormGroup;
  authMethod: authMethodEnum = authMethodEnum.login;

  toggleSwitchMethod = () => {
    this.authMethod == authMethodEnum.login ? this.authMethod = authMethodEnum.register : this.authMethod = authMethodEnum.login
  }

  logout() {
    this.authService.logout()
    this.toastr.success('Logged out')
  }

  login() {
    const val = this.form.value;
    if (val.email && val.password) {
      this.authService.login(val.email, val.password)
        .subscribe({
          next: () => {
            this.toastr.success("User is logged in");
            this.router.navigateByUrl('/');
          },
          error: (error) => {
            this.toastr.error(JSON.stringify(error.error.message),)
          }
        });
    }
  }

  register() {
    const val = this.form.value;
    if (val.email && val.password) {
      this.authService.register(val.email, val.password)
        .subscribe({
          next: () => {
            this.toastr.success("User is Registered");
            this.router.navigateByUrl('/');
          },
          error: (error) => {
            this.toastr.error(JSON.stringify(error.error.message))
          }
        });
    }
  }
}
