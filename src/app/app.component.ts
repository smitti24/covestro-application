import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import * as fromApp from './store/app.reducer';
import * as AuthActions from './auth/store/auth.actions';
import { User } from './model/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'covestro-v2-app';
  public userProfile!: Observable<User>;

  constructor(private _store: Store<fromApp.AppState>) {}

  ngOnInit(): void {
    this._store.dispatch(new AuthActions.AutoLogin());
  }
}
