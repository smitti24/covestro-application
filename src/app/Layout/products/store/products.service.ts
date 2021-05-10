import { Product } from './../../../model/product.model';
import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';

@Injectable({ providedIn: 'root' })
export class ProductsService extends EntityCollectionServiceBase<Product> {
  // constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
  //   super('Product', serviceElementsFactory);
  // }
}
