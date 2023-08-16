import { Component, Input, OnInit } from '@angular/core';
import { Product, SharedLibraryService } from '@shared-library';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss']
})
export class CardProductComponent implements OnInit {

  constructor(private sharedLibrary: SharedLibraryService) {}

  @Input() product!: Product;


  ngOnInit(): void {
    this.sharedLibrary.getShoppingCart().forEach(product => {
      if (product.id === this.product.id) {
        this.product = product;
      }
    })
  }

  addToCart(product: any) {
    if (product.addedToCart) {
      product.addedToCart = false;
    }
    else {
      product.addedToCart = true;
      this.sharedLibrary.addProductToCart(product);
    }
  }

}
