import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from './../authenticate.service'
import { AppUser } from './../models/appUser';
import { ShoppingCartService } from '../shopping-cart.service';
import { ShoppingCart } from '../models/shopping-cart';
import { Observable } from 'rxjs';
import { AngularFireObject } from 'angularfire2/database';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  appUser: AppUser;
  cart$: Observable<ShoppingCart>;
  constructor(private auth: AuthenticateService,private shoppingCartService: ShoppingCartService) {
    
   }

  logout()
  {
    this.auth.logout();
  }

  async ngOnInit(){
    this.auth.appUser$.subscribe(appUser => this.appUser = appUser);
    this.cart$ =await this.shoppingCartService.getCart();
    console.log("yooo");
    console.log(this.cart$);
  }



}
