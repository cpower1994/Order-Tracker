import {Component, OnInit} from '@angular/core';

import {OrdersService} from '../orders.service';
import {Order} from '../order';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  title = 'order-list';
  orders: Order[];

  constructor(private orderService: OrdersService) {}

  ngOnInit(): void {
    // calls get API
    this.getOrders();
  }

  getOrders(): void {
    this.orderService.getOrders()
      .subscribe(orders => this.orders = orders);
  }
}


