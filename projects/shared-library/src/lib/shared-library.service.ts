import { Injectable } from '@angular/core';
import { Product } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class SharedLibraryService {

  private productsInCart: Product[] = [];

  constructor() { }

  addProductToCart(product: Product) {
    this.productsInCart.push(product);
  }

  removeProductFromCart(product: Product) {
    const indexProduct = this.productsInCart.indexOf(product)
    if (indexProduct > -1) {
      this.productsInCart.splice(indexProduct, 1);
    }
  }

  getShoppingCart() {
    return this.productsInCart;
  }

}
