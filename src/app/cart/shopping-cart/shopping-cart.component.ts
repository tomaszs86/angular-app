import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingCartService } from "app/shared/shopping-cart-service";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  myCart: any[];
    cartTotal: number;

    constructor( private cartSVC: ShoppingCartService, private router: Router ){}

    ngOnInit(){
        this.cartSVC.getCart()
            .then(theCart => this.myCart = theCart)
            .then(cart => this.sumCart(cart))
            .then(sum => this.cartTotal = sum);
    }

    sumCart(cart: any){
        return Promise.resolve(cart.reduce((total: number, item: any) => total + item.price, 0));
    }

    removeCart(id:string){
        this.cartSVC.removeCart(id);
        this.sumCart(this.myCart).then(sum => this.cartTotal = sum); 
    }

    purchase(){
        alert(`Your Order Totaled ${this.cartTotal}`);
        this.router.navigate(['/products']);
    }

    cancel(){
        this.router.navigate(['/products']);
    }


}
