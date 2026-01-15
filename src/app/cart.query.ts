import { QueryEntity } from '@datorama/akita';
import { CartStore, CartState } from './cart.store';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem } from './cart-item.model';
@Injectable({ providedIn: 'root' })
export class CartQuery extends QueryEntity<CartState> {
  // Automatically gives you an observable of the whole list
  
items$: Observable<CartItem[]>;
  totalPrice$: Observable<number>;
  // Calculate total price reactively
 

  constructor(protected override store: CartStore) {
    super(store);
    this.items$ = this.selectAll();
     this.totalPrice$ = this.selectAll().pipe(
    map(items => items.reduce((acc, item) => acc + item.price, 0))
  );
  }
}