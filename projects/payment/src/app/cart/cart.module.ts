import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { PaymentComponent } from '../payment/payment.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'cart', component: CartComponent }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    CartComponent,
    PaymentComponent
  ],
  exports: [
    // PaymentComponent
  ]
})
export class CartModule { }
