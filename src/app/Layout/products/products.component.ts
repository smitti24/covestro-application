import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Product } from 'src/app/model/product.model';
import * as fromProducts from '../../store/app.reducer';
import * as ProductActions from './store/products.action';
// import { ProductsService } from './store/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  public allProducts!: Product[];
  // products$!: Observable<Product[]>;
  // loading$: Observable<boolean>;

  constructor(private _store: Store<fromProducts.AppState>) {
    // this.products$ = _productsService.entities$;
    // this.loading$ = _productsService.loading$;
    // this._productsService.getAll();
    // console.log(this._productsService);
  }

  ngOnInit(): void {
    this._store
      .select('products')
      .pipe(
        tap((data) => {
          if (!data.loaded)
            this._store.dispatch(new ProductActions.GetProducts());
        }),
        map((data) => data.products)
      )
      .subscribe((products) => {
        this.allProducts = products;
      });
  }
}
