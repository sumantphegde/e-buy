import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from './../authenticate.service'


@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{
  constructor(private auth: AuthenticateService) {
   }

  logout()
  {
    this.auth.logout();
  }

}
