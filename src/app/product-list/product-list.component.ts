import { Component } from '@angular/core';
import {ProductStore,ProductQuery} from '../product.store';
import{Product} from '../product.model';
import { ProductService } from '../product.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
products$:Observable<Product[]>;
constructor(private Prodstore:ProductQuery, private productService: ProductService){

  this.productService.addItem("Bread", 120);
   this.productService.addItem("vegetables", 220);
   this.productService.addItem("fish", 420);
   this.productService.addItem("Chapati", 420);
this.products$=this.Prodstore.selectAll();
}

}
