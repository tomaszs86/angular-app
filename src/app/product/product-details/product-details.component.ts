import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from "app/product/product";
import { ProductService } from "app/product/product.service";
import { Subscription } from "rxjs/Rx";
import { ShoppingCartService } from "app/shared/shopping-cart-service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {

    public pageTitle: string = 'Product Detail';
    public product: Product;
    public errorMessage: string;

    private sub: Subscription;
    
    constructor(
        private router: Router, 
        private route: ActivatedRoute, 
        private productService: ProductService,
        private cartService: ShoppingCartService
    ) { }

    public ngOnInit(): void {
        
        this.sub = this.route.params.subscribe(
            params => {
                let id = +params['id'];
                this.getProduct(id);
        });
    }

    public ngOnDestroy() {
        this.sub.unsubscribe();
    }

    public getProduct(id: number) {
        this.productService.getProduct(id).subscribe(
            product => this.product = product,
            error => this.errorMessage = <any>error);
    }

    public onBack(): void {
        this.router.navigate(['/products']);
    }

    public onRatingClicked(message: string): void {
        this.pageTitle = 'Product Detail: ' + message;
    }

    public addProduct(product:Product){
        this.cartService.addProduct(product);
    }

}
