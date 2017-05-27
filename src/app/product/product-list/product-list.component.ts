import { Component, OnInit } from '@angular/core';
import { ProductService } from "app/product/product.service";
import { Product } from "app/product/product";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  pageTitle: string = 'Products';
  listFilter: string;
  
  products: Product[];
  errorMessage: string;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
        this.productService.getProducts()
                .subscribe(products => this.products = products,
                           error => this.errorMessage = <any>error);
  }

  public onRatingClicked(message: string): void {
        this.pageTitle = 'Products: ' + message;
  }

}
