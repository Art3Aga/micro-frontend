import { Component, OnInit } from '@angular/core';
import { Product, SharedLibraryService } from '@shared-library';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  shoppingCart: any[] = [];

  constructor(private sharedLibrary: SharedLibraryService) { }

  ngOnInit() {
    this.shoppingCart = this.sharedLibrary.getShoppingCart();
  }


  removeProduct(product: Product) {
    this.sharedLibrary.removeProductFromCart(product);
  }

}
