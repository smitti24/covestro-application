import { LoginModalService } from '../../../services/login-modal.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as AuthActions from '../../../auth/store/auth.actions';
import * as fromAuth from '../../../store/app.reducer';

@Component({
  selector: 'app-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss'],
})
export class LoginModalComponent implements OnInit {
  loginForm: FormGroup;
  showFormError: boolean = false;

  constructor(
    public _LoginModalService: LoginModalService,
    private fb: FormBuilder,
    private _store: Store<fromAuth.AppState>
  ) {
    this.loginForm = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  ngOnInit(): void {}

  public login(): void {
    if (this.loginForm.invalid) {
      this.email?.markAllAsTouched();
      this.password?.markAllAsTouched();
      return;
    }

    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;

    this._store.dispatch(
      new AuthActions.LoginStart({ email: email, password: password })
    );
    this._LoginModalService.isVisible = false;
    this.loginForm.reset();
  }
}
