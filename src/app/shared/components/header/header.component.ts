import { User } from '../../../model/user.model';
import { LoginModalService } from './../../../services/login-modal.service';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { select, Store } from '@ngrx/store';
import * as AuthActions from '../../../auth/store/auth.actions';
import * as fromAuth from '../../../store/app.reducer';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  private userSub!: Subscription;
  isAuthenticated = false;
  userProfile!: User;

  constructor(
    private _loginModalService: LoginModalService,
    private _store: Store<fromAuth.AppState>
  ) {
  }

  ngOnInit(): void {
    this.userSub = this._store
      .select('auth')
      .pipe(map((authState) => authState.user))
      .subscribe((user) => {
        if (user?.id) {
          this.isAuthenticated = !!user.id;
          this.userProfile = user;
        }
      });
  }

  showLoginModal() {
    this._loginModalService.isVisible = true;
  }

  public logout(): void {
    this.isAuthenticated = false;
    this.userProfile = this.userProfile!;
    this._store.dispatch(new AuthActions.Logout());
  }

  public OnDestroy() {
    this.isAuthenticated = false;
    this.userSub.unsubscribe();
  }
}
