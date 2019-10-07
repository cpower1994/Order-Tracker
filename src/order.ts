import {Item} from './item';

export class Order {
  customer_first_name: string;
  customer_last_name: string;
  items: Array<Item>;
}
