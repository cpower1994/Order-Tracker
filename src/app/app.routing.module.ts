import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OrderItemComponent } from '../order-item/order-item.component';
import { OrderListComponent } from '../order-list/order-list.component';
import {LoginComponent} from '../login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'newOrder', component: OrderItemComponent },
  { path: 'orderList', component: OrderListComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
