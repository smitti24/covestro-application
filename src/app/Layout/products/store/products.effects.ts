import { ProductService } from './../../../services/product.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as ProductActions from './products.action';
import { map, concatMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductEffect {
  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {}
  @Effect()
  getProducts$ = this.actions$.pipe(
    ofType(ProductActions.GET_PRODUCTS),
    concatMap((action) => this.productService.getAllProducts()),
    map((products) => new ProductActions.ProductsLoadedSucesfully(products))
  );
}
