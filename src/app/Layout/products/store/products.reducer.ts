import { Product } from './../../../model/product.model';
import * as ProductActions from './products.action';

export interface State {
  products: Product[];
  loaded: boolean;
}

const initialState: State = {
  products: [],
  loaded: false,
};

export function productsReducer(
  state = initialState,
  action: ProductActions.ProductsActions
) {
  switch (action.type) {
    case ProductActions.PRODUCTS_LOADED_SUCCESS:
      return {
        ...state,
        products: [...action.payload],
        loaded: true,
      };
    default:
      return state;
  }
}
