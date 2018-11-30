import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { ShoppingCartItem } from './models/shopping-cart-item';
import { ShoppingCartService } from './shopping-cart.service';
import {Subscription} from 'rxjs/Subscription';
import { AuthenticateService } from './authenticate.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  userSubscription : Subscription;
  
  constructor(private db: AngularFireDatabase, private shoppingCartService : ShoppingCartService,private authService: AuthenticateService ) { }
  // Storing and clearing cart
  placeOrder(order)
  {

    let result = this.db.list('/order').push(order);
    this.shoppingCartService.clearCart();
    return result;

  };

  getOrders() { 
    console.log("In the getOrder");
    return this.db.list('/order').valueChanges();
  }
  getOrdersByUser(userId: string) {
    
    return this.db.list('/order',ref => ref.orderByChild('userID').equalTo(userId)).valueChanges();
  }
}
