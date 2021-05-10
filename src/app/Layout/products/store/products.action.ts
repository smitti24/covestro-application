import { Product } from './../../../model/product.model';
import { Action } from '@ngrx/store';

export const GET_PRODUCTS = '[Products] Get All Products';
export const PRODUCTS_LOADED_SUCCESS =
  '[Products] All Product Loaded Succesfully';

export class GetProducts implements Action {
  readonly type = GET_PRODUCTS;
}

export class ProductsLoadedSucesfully implements Action {
  readonly type = PRODUCTS_LOADED_SUCCESS;

  constructor(public payload: Product[]) {}
}

export type ProductsActions = GetProducts | ProductsLoadedSucesfully;
