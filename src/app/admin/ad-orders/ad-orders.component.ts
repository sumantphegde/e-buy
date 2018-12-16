import { Component, OnInit } from "@angular/core";
import { OrderService } from "./../../order.service";
import { Order } from "./../../models/order";

@Component({
  selector: "app-ad-orders",
  templateUrl: "./ad-orders.component.html",
  styleUrls: ["./ad-orders.component.css"]
})
export class AdOrdersComponent {
  order$;
  constructor(private orderService: OrderService) {
    this.order$ = orderService.getOrders();
  }
}
