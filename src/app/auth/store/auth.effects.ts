import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { of } from 'rxjs';
import * as AuthActions from './auth.actions';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private router: Router,
    private _authService: AuthService
  ) {}

  @Effect()
  login$ = this.actions$.pipe(
    ofType(AuthActions.LOGIN_START),
    switchMap((data: AuthActions.LoginStart) => {
      return this._authService
        .login(data.payload.email, data.payload.password)
        .pipe(
          map((res) => {
            localStorage.setItem('user', JSON.stringify(res));
            return new AuthActions.AuthenticateSuccess({
              email: res.email,
              name: res.name,
              id: res.id,
              redirect: true,
            });
          }),
          catchError((err) => {
            console.log(err);
            return of(new AuthActions.AuthenticateFail(err));
          })
        );
    })
  );

  @Effect({ dispatch: false })
  authRedirect$ = this.actions$.pipe(
    ofType(AuthActions.AUTHENTICATE_SUCCESS),
    tap((authSuccessAction: AuthActions.AuthenticateSuccess) => {
      if (authSuccessAction.payload.redirect) {
        this.router.navigate(['/home']);
      }
    })
  );

  @Effect()
  autoLogin = this.actions$.pipe(
    ofType(AuthActions.AUTO_LOGIN),
    map(() => {
      const user = JSON.parse(localStorage.getItem('user') || '{}');

      if (user) {
        return new AuthActions.AuthenticateSuccess({
          email: user.email,
          name: user.name,
          id: user.id,
          redirect: true,
        });
      } else {
        return { type: 'PLACEHOLDER USER' };
      }
    })
  );

  @Effect({ dispatch: false })
  logout$ = this.actions$.pipe(
    ofType(AuthActions.LOGOUT),
    tap(() => {
      localStorage.removeItem('user');
      this.router.navigateByUrl('/home');
    })
  );
}
