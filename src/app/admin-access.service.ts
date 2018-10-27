import { CanActivate } from '@angular/router';
import { AuthenticateService } from './authenticate.service';
import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/switchMap';

@Injectable({
  providedIn: 'root'
})
export class AdminAccess implements CanActivate {

  constructor(private auth: AuthenticateService, private uService: UserService) { }

  canActivate():Observable<boolean>{
    return this.auth.appUser$
    .map(appUser => appUser.isAdmin);
  }

}
