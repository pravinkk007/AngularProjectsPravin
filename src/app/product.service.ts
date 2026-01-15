import { Injectable } from '@angular/core';
import { ProductStore } from './product.store';
@Injectable({ providedIn: 'root' })
export class ProductService {
  constructor(private ProductStore: ProductStore) {}

  addItem(name: string, price: number) {
    const id = Math.random();
    this.ProductStore.add({ id, name, price });
  }

  removeItem(id: number) {
    this.ProductStore.remove(id);
  }

  clearCart() {
    this.ProductStore.set([]);
  }
}