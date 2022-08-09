import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { authMethodEnum } from '../../enums/authMethod';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
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
  formState = false
  authMethod: authMethodEnum = authMethodEnum.login;

  toggleSwitchMethod = () => {
    this.authMethod == authMethodEnum.login ? this.authMethod = authMethodEnum.register : this.authMethod = authMethodEnum.login
  }

  ngOnInit(): void {
    this.formState = !!this.authService.user
  }

  logout() {
    this.authService.logout()
    this.formState = false
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
            this.formState = true
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
            this.formState = true
          },
          error: (error) => {
            this.toastr.error(JSON.stringify(error.error.message))
          }
        });
    }
  }
}
