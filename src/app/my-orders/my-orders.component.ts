import { AuthenticateService } from './../authenticate.service';
import { OrderService } from './../order.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent {
  orders$;
  dateplaced;
  
  constructor(
    private authService: AuthenticateService,
    private orderService: OrderService, private router: Router) { 

    this.orders$ = authService.user$.switchMap(u => orderService.getOrdersByUser(u.uid));
  }
  viewOrders(data : string){
    console.log("HEereeee!!!!!!!!!!!!!!!!!!!!!!!!");
   // let cardID = String(event.attributes.value);
   // let cardID: string = (event.target as Element).nodeValue;
   this.dateplaced = data;
    //console.log("HEreeee is fkwrhfkwfh"+this.cardID);
    this.router.navigate(['/view-orders', this.dateplaced] );
  }
}
