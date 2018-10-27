import { CanActivate , RouterStateSnapshot} from '@angular/router';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from './authenticate.service';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class RestrictAccess implements CanActivate{

  constructor(private auth:AuthenticateService, private router:Router) { }

  canActivate(route, state:RouterStateSnapshot) {
    return this.auth.user$.map(user => {
      if (user) return true;

      this.router.navigate(['/login'], { queryParams: {returnUrl:state.url}});
      return false;
    })
  }
  }
