import { Product } from "app/product/product";
import { ProductService } from "app/product/product.service";

import { Component, OnInit, AfterViewInit, OnDestroy, ViewChildren, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators, FormControlName } from '@angular/forms';
import { ActivatedRoute, Router  } from '@angular/router';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/merge';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { GenericValidator } from "app/shared/generic-validator";
import { NumberValidators } from "app/shared/number-validator";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];

  public pageTitle: string;
  public product: Product;
  public errorMessage: string;
  public productForm: FormGroup;
  public displayMessage: { [key: string]: string } = {};
  
  private validationMessages: { [key: string]: { [key: string]: string } };   
  private genericValidator: GenericValidator;
  private sub: Subscription;
  
  constructor(
      private router: Router, 
      private route: ActivatedRoute, 
      private productService: ProductService, 
      private fb: FormBuilder,) { 
    this.setValidationMessages();      
  }

  private setValidationMessages() : void {

    this.validationMessages = {
            productName: {
                required: 'Product name is required.',
                minlength: 'Product name must be at least three characters.',
                maxlength: 'Product name cannot exceed 50 characters.'
            },
            productCode: {
                required: 'Product code is required.'
            },
            starRating: {
                range: 'Rate the product between 1 (lowest) and 5 (highest).'
            }
        };

        this.genericValidator = new GenericValidator(this.validationMessages);
  }

  public ngOnInit(): void {
   
        this.productForm = this.fb.group({
            productName: ['', [Validators.required,
                               Validators.minLength(3),
                               Validators.maxLength(50)]],
            productCode: ['', Validators.required],
            starRating: ['', NumberValidators.range(1,5)],
            tags: this.fb.array([]),            
            description: ''
        });

        this.sub = this.route.params.subscribe(
            params => {
                let id = +params['id'];
                this.getProduct(id);
            }
        );
    }

    public ngAfterViewInit(): void {
        // Watch for the blur event from any input element on the form.
        let controlBlurs: Observable<any>[] = this.formInputElements
            .map((formControl: ElementRef) => 
            Observable.fromEvent(formControl.nativeElement, 'blur'));

        // Merge the blur event observable with the valueChanges observable
        Observable.merge(this.productForm.valueChanges, 
        ...controlBlurs).debounceTime(800).subscribe(value => {
            this.displayMessage = this.genericValidator.processMessages(this.productForm);
        });
    }

    public onBack(): void {
        this.router.navigate(['/products']);
    }

    private get tags(): FormArray {
        return <FormArray>this.productForm.get('tags');
    } 

    public ngOnDestroy() {
        this.sub.unsubscribe();
    }

    public getProduct(id: number): void {

        this.productService.getProduct(id)
            .subscribe(
                (product: Product) => this.onProductRetrieved(product),
                (error: any) => this.errorMessage = <any>error
            );
    }

    private onProductRetrieved(product: Product): void {
        
        if (this.productForm) {
            this.productForm.reset();
        }

        this.product = product;

        if (this.product.id === 0) {
            this.pageTitle = 'Add Product';
        } else {
            this.pageTitle = `Edit Product: ${this.product.productName}`;
        }
        
        this.productForm.patchValue({
            productName: this.product.productName,
            productCode: this.product.productCode,
            starRating: this.product.starRating,
            description: this.product.description
        });        
    }

    public saveProduct(): void {
        if (this.productForm.dirty && this.productForm.valid) {
            // Copy the form values over the product object values
            let p = Object.assign({}, this.product, this.productForm.value);

            this.productService.saveProduct(p)
                .subscribe(
                    () => this.onSaveComplete(),
                    (error: any) => this.errorMessage = <any>error
                );
        } else if (!this.productForm.dirty) {
            this.onSaveComplete();
        }
    }

    public deleteProduct(): void {
        if (this.product.id === 0) {
            // Don't delete, it was never saved.
            this.onSaveComplete();
       } else {
            if (confirm(`Really delete the product: ${this.product.productName}?`)) {
                this.productService.deleteProduct(this.product.id)
                    .subscribe(
                        () => this.onSaveComplete(),
                        (error: any) => this.errorMessage = <any>error
                    );
            }
        }
    }

    private onSaveComplete(): void {
        // Reset the form to clear the flags
        this.productForm.reset();
        this.router.navigate(['/products']);
    }

    public addTag(): void {
        this.tags.push(new FormControl());
    }
}
