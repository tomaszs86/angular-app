import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductService } from './product.service';
import { ProductFilterPipe } from './product-filter.pipe';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { SharedModule } from "app/shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule
  ],
  declarations: [ProductListComponent, ProductFilterPipe, ProductDetailsComponent, ProductEditComponent, ProductCreateComponent],
  providers: [ProductService]
})
export class ProductModule { }
