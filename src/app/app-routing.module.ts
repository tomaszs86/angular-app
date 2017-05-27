import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductModule } from "app/product/product.module";
import { HomeComponent } from "app/home/home.component";
import { UserModule } from "app/user/user.module";
import { CartModule } from "app/cart/cart.module";

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: []
  },
  {
    path: '', 
    redirectTo: 'home', 
    pathMatch : 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ProductModule, UserModule, CartModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
