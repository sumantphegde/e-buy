import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import {Observable} from 'rxjs/Rx';
import { ActivatedRoute } from '@angular/router';
import {OrderService} from './../../order.service';

@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.component.html',
  styleUrls: ['./view-orders.component.css']
})
export class ViewOrdersComponent implements OnInit {
  orders$;
  order_no;
  constructor(private orderService: OrderService,private route: ActivatedRoute) { }
  
  //this.order_no =  params['id'] //log the value of id
 

  
  ngOnInit() {
    this.route.params.subscribe(params => {
      
      this.order_no =  params['id'];//log the value of id}
  });
  console.log(this.order_no);
  //this.order_no = 1543823483306;
  this.orders$ = this.orderService.getOrdersByCartID(parseInt(this.order_no));
  console.log(this.orders$);
}
}
