import { Injectable } from '@angular/core';
import { Product } from "app/product/product";

@Injectable()
export class ShoppingCartService {

    public myCart:any[]=[];

    public addProduct(product: Product){
        this.myCart.push({'id': product.id, 'name': product.description, 'price': Number(product.price)})
        alert(`${name} added to cart`);  
    }

    public getCart(){
        return Promise.resolve(this.myCart);
    }

    public removeCart(searchId: string){
        
        let tmp = this.myCart.map(x => x.id).indexOf(searchId);

        if (tmp > -1) {
            this.myCart.splice(tmp, 1);
        }
    }
}
