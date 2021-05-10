import { Product } from './../model/product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private _http: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    return this._http.get('/api/products').pipe(map((res) => res['payload']));
  }
}
