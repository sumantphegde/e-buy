import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from './../authenticate.service'
import { AppUser } from './../models/appUser';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{
  appUser: AppUser;
  constructor(private auth: AuthenticateService) {
    auth.appUser$.subscribe(appUser => this.appUser = appUser);
   }

  logout()
  {
    this.auth.logout();
  }



}
