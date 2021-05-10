import { Product } from '../../model/product.model';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Actions, ofType } from '@ngrx/effects';
import * as fromApp from '../../store/app.reducer';
import { Store } from '@ngrx/store';
import { map, switchMap, take } from 'rxjs/operators';
import * as ProductActions from './store/products.action';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductsResolverService implements Resolve<Product[]> {
  constructor(
    private _store: Store<fromApp.AppState>,
    private actions$: Actions
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log('here');
    return this._store.select('products').pipe(
      take(1),
      map((productsState) => {
        return productsState.products;
      }),
      switchMap((products) => {
        if (products.length === 0) {
          this._store.dispatch(new ProductActions.GetProducts());
          return this.actions$.pipe(
            ofType(ProductActions.PRODUCTS_LOADED_SUCCESS),
            take(1)
          );
        } else {
          return of(products);
        }
      })
    );
  }
}
