import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { CartStore } from './cart.store';
import { CartQuery } from './cart.query';
import { CartService } from './cart.service';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CartStore, CartQuery, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
