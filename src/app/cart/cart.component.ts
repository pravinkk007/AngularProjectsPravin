import { Component } from '@angular/core';
import { CartQuery } from '../cart.query';
import { CartService } from '../cart.service';
import { Observable } from 'rxjs';
import { CartItem } from '../cart-item.model';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  items$!: Observable<CartItem[]>;
  total$!: Observable<number>;

  constructor(
    private cartQuery: CartQuery, 
    private cartService: CartService
  ) {
  this.items$ = this.cartQuery.items$;
  this.total$ = this.cartQuery.totalPrice$;

  }

  onAdd(name: string, price: number) {
    this.cartService.addItem(name, price);
  }
  onRemove(id: number) {
    this.cartService.removeItem(id);
  }
}
