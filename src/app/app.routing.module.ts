import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OrderItemComponent } from '../order-item/order-item.component';
import { OrderListComponent } from '../order-list/order-list.component';

const routes: Routes = [
  { path: 'newOrder', component: OrderItemComponent },
  { path: 'orderList', component: OrderListComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
