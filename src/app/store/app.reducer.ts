import { ActionReducerMap } from '@ngrx/store';
import * as fromAuth from '../auth/store/auth.reducer';
import * as fromProducts from '../Layout/products/store/products.reducer';

export interface AppState {
  auth: fromAuth.State;
  products: fromProducts.State;
}

export const appReducer: ActionReducerMap<AppState, any> = {
  auth: fromAuth.authReducer,
  products: fromProducts.productsReducer,
};
