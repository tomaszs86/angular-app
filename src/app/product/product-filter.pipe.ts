import { Pipe, PipeTransform } from '@angular/core';
import { Product } from "app/product/product";

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(value: Product[], filterBy: string): Product[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((product: Product) =>
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }

}
