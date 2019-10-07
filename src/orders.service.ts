import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Order} from './order';

@Injectable({providedIn: 'root'})
export class OrdersService {
  private orderUrl = 'http://localhost:3000/orders';

  constructor(private http: HttpClient) {}

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.orderUrl);
  }

  placeOrders(order: Order): Observable<Order> {
    console.log(order);
    return this.http.post<Order>(this.orderUrl, order);
  }


}
