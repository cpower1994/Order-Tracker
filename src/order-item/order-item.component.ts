import {Component, Input} from '@angular/core';
import {OrdersService} from '../orders.service';
import {Order} from '../order';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.scss']
})
export class OrderItemComponent {
  title = 'orderTracker';
  @Input() firstName;
  @Input() lastName;
  orderObject = {
    customer_first_name: '',
    customer_last_name: '',
    items: [],
  };

  constructor(private orderService: OrdersService) {}

  submitOrder() {
    this.orderObject.customer_first_name = this.firstName;
    this.orderObject.customer_last_name = this.lastName;
    console.log(this.orderObject);

    this.orderService.placeOrders(this.orderObject);
  }
}
