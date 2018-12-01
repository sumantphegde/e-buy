import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './../shopping-cart.service';
import { ShoppingCartComponent } from 'src/app/shopping-cart/shopping-cart.component';
import { ShoppingCart } from 'src/app/models/shopping-cart';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit { 
  
  cart$ : Observable<ShoppingCart>;
 
 
  
  
  constructor(
    private ShoppingCartService: ShoppingCartService){  }

  async ngOnInit(){
    this.cart$ = await this.ShoppingCartService.getCart();    
  }
    
}
