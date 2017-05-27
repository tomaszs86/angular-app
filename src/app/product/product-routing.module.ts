import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from "app/product/product-list/product-list.component";
import { ProductDetailsComponent } from "app/product/product-details/product-details.component";
import { ProductEditComponent } from "app/product/product-edit/product-edit.component";

const routes: Routes = [
  {
    path: 'products',
    component: ProductListComponent,
    children: []
  },
  {
    path: 'product/:id',
    component: ProductDetailsComponent,
    children: []
  },
  {
    path: 'product/edit/:id',
    component: ProductEditComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
