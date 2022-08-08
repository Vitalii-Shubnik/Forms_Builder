import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  formState = false

  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private router: Router) {

    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    this.formState = !!this.authService.user
  }

  logout() {
    this.authService.isLoggedIn() && this.authService.logout()
    this.formState = false
  }

  login() {
    const val = this.form.value;
    if (val.email && val.password) {
      this.authService.login(val.email, val.password)
        .subscribe(
          () => {
            console.log("User is logged in");
            this.router.navigateByUrl('/');
            this.formState = true
          }
        );
    }
  }
  register() {
    const val = this.form.value;

    if (val.email && val.password) {
      this.authService.register(val.email, val.password)
        .subscribe(
          () => {
            console.log("User is registered");
            this.router.navigateByUrl('/');
            this.formState = true

          }
        );
    }
  }
}
