import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'products',
    loadChildren: () =>
      import('../../../shopping/src/app/products/products.module').then((m) => m.ProductsModule),
  },
  {
    path: 'payment',
    loadChildren: () =>
      import('../../../payment/src/app/cart/cart.module').then((m) => m.CartModule),
  },
  {
    path: '**',
    redirectTo: 'products'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
