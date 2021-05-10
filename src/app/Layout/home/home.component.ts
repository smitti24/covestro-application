import { User } from './../../model/user.model';
import { Router } from '@angular/router';
import { LoginModalService } from './../../services/login-modal.service';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public isUserLoggedIn: boolean = false;
  public loggedInUser$!: Observable<User | null>;

  constructor(
    private _loginModalService: LoginModalService,
    private _store: Store<fromApp.AppState>,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.loggedInUser$ = this._store
      .select('auth')
      .pipe(map((authState) => authState.user));

    this._store
      .select('auth')
      .pipe(map((authState) => authState.user))
      .subscribe((user) => {
        if (!user?.email) {
          this.isUserLoggedIn = false;
        } else {
          this.isUserLoggedIn = true;
        }
      });
  }

  viewMore() {
    if (!this.isUserLoggedIn) {
      this._loginModalService.isVisible = true;
      return;
    } else {
      this._router.navigateByUrl('/products');
    }
  }

  login() {
    this._loginModalService.isVisible = true;
  }
}
