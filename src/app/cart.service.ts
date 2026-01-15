import { Injectable } from '@angular/core';
import { CartStore } from './cart.store';
@Injectable({ providedIn: 'root' })
export class CartService {
  constructor(private cartStore: CartStore) {}

  addItem(name: string, price: number) {
    const id = Math.random();
    this.cartStore.add({ id, name, price });
  }

  removeItem(id: number) {
    this.cartStore.remove(id);
  }

  clearCart() {
    this.cartStore.set([]);
  }
}