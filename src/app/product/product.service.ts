import { Injectable } from '@angular/core';
import { Product } from "app/product/product";
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of';
import { Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ProductService {

  private productUrl = 'api/products';

  constructor(private http: Http) { }

  public getProducts(): Observable<Product[]> {
        return this.http.get(this.productUrl)
            .map(this.extractData)
            //.do(data => console.log('getProducts: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    public getProduct(id: number): Observable<Product> {
        if (id === 0) {
            return Observable.of(this.initializeProduct());
        };

        return this.http.get(`${this.productUrl}/${id}`)
            .map(this.extractData)
            .catch(this.handleError);
    }

    public saveProduct(product: Product): Observable<Product> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        if (product.id === 0) {
            return this.createProduct(product, options);
        }

        return this.updateProduct(product, options);
    }

    private createProduct(product: Product, options: RequestOptions): Observable<Product> {
        
        product.id = undefined;
        
        return this.http.post(this.productUrl, product, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private updateProduct(product: Product, options: RequestOptions): Observable<Product> {
       
        return this.http.put(`${this.productUrl}/${product.id}`, product, options)
            .map(() => product)
            .do(data => console.log('updateProduct: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }
    
     public deleteProduct(id: number): Observable<Response> {

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.delete(`${this.productUrl}/${id}`, options)
            .catch(this.handleError);
    }

    private initializeProduct(): Product {      
        return {
            id: 0,
            productName: null,
            productCode: null,            
            releaseDate: null,
            price: null,
            tags: [''],
            description: null,
            starRating: null
        };
    }

    private extractData(response: Response) {
        let body = response.json();
        return body.data || {};
    }

    private handleError(error: Response): Observable<any> {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
