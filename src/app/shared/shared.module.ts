import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StarComponent } from './star/star.component';
import {Routes, RouterModule} from '@angular/router';
import { ShoppingCartService } from "app/shared/shopping-cart-service";

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StarComponent
  ],
  declarations: [StarComponent],
  providers: [ShoppingCartService]
})
export class SharedModule { }
