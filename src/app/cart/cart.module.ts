import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { SharedModule } from "app/shared/shared.module";
import { ShoppingCartService } from "app/shared/shopping-cart-service";

@NgModule({
  imports: [
    CommonModule,
    CartRoutingModule,
    SharedModule
  ],
  declarations: [ShoppingCartComponent],
  providers: [ShoppingCartService]
})
export class CartModule { }
