import { Component, OnInit } from '@angular/core';
import { Product } from '@shared-library';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }


  products: Product[] = [
    {
      title: 'Producto 1',
      description: 'Descripción Laptop',
      img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      addedToCart: false,
      price: 115.38,
      id: 1
    },
    {
      title: 'Producto 2',
      description: 'Descripción Producto',
      img: 'https://images.unsplash.com/photo-1577174881658-0f30ed549adc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGxhcHRvcHMlMkMlMjBzbWFydHBob25lcyUyQyUyMGhlYWRwaG9uZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      addedToCart: false,
      price: 52.89,
      id: 2
    },
    {
      title: 'Producto 3',
      description: 'Descripción Producto',
      img: 'https://images.unsplash.com/photo-1634403665481-74948d815f03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNtYXJ0cGhvbmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      addedToCart: false,
      price: 238.71,
      id: 3
    },
    {
      title: 'Producto 4',
      description: 'Descripción Producto',
      img: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGxhcHRvcHMlMkMlMjBzbWFydHBob25lcyUyQyUyMGhlYWRwaG9uZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      addedToCart: false,
      price: 42.87,
      id: 4
    },
    {
      title: 'Producto 5',
      description: 'Descripción Producto',
      img: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGFwdG9wcyUyQ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      addedToCart: false,
      price: 10.99,
      id: 5
    },
    {
      title: 'Producto 6',
      description: 'Descripción Producto',
      img: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGxhcHRvcHMlMkN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      addedToCart: false,
      price: 299.99,
      id: 6
    },
    {
      title: 'Producto 7',
      description: 'Descripción Producto',
      img: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnRwaG9uZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      addedToCart: false,
      price: 328.00,
      id: 7
    },
    {
      title: 'Producto 8',
      description: 'Descripción Producto',
      img: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGxhcHRvcHMlMkMlMjBzbWFydHBob25lcyUyQyUyMGhlYWRwaG9uZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      addedToCart: false,
      price: 78.96,
      id: 8
    },
  ];

  ngOnInit() {
  }

}
