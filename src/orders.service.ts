import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Order} from './order';

@Injectable({providedIn: 'root'})
export class OrdersService {
  private orderUrl = 'http://localhost:3000/orders';
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };


  constructor(private http: HttpClient) {}

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.orderUrl);
  }

  placeOrders(order: Order): Observable<Order> {
    console.log(order);
    return this.http.post<Order>(this.orderUrl, order);
  }


}
