import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { CartItem } from './cart-item.model';
import { Injectable } from '@angular/core';

export interface CartState extends EntityState<CartItem> {}
@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'cart' })
export class CartStore extends EntityStore<CartState> {
  constructor() {
    super();
  }
}