import { Injectable} from '@angular/core';
import { EntityState,EntityStore, StoreConfig,QueryEntity} from '@datorama/akita';
import {Product} from './product.model';
import { Observable } from 'rxjs';
export interface ProductState extends EntityState<Product> {}
@Injectable ({providedIn:'root'})
@StoreConfig ({name:'products'})
export class ProductStore extends EntityStore<ProductState,Product>{
    constructor(){
        super();
    }
}
@Injectable({ providedIn: 'root' })
export class ProductQuery extends QueryEntity<ProductState, Product> {
  // Use selectAll() here
  allProducts$ :Observable<Product[]>;

  constructor(protected override store: ProductStore) {
    super(store);
     this.allProducts$ = this.selectAll();
  }
}