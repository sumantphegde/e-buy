import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import { AuthenticateService } from '../authenticate.service';
import { OrderService } from 'src/app/order.service';
import { Router } from '@angular/router';
import {Order} from '../models/order';
import { ShoppingCart } from '../models/shopping-cart';

@Component({
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit, OnDestroy{

  constructor(
    private router : Router,
    private authService: AuthenticateService,
    private OrderService: OrderService){  }

  @Input('cart') cart : ShoppingCart;
  shipping = {}; 
  userId : String;
  userSubscription : Subscription;
  ngOnInit() {
    this.userSubscription = this.authService.user$.subscribe(user => this.userId = user.uid);
  }

  
  ngOnDestroy(){
    this.userSubscription.unsubscribe();
  }

  placeOrder() {
    let order = new Order(this.userId,this.shipping,this.cart);
    let result = this.OrderService.placeOrder(order);
    
    this.router.navigate(['/order-success' , result.key]);
  }  

}
