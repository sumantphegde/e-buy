import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth'
import { UserService } from './user.service';
import { AppUser } from './models/appUser';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  user$ : Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth, private route: ActivatedRoute, private uService: UserService) {
    this.user$ = afAuth.authState;
   }

   login()
   {
     let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
     localStorage.setItem('returnUrl', returnUrl);

     this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
   }

   logout()
   {
     this.afAuth.auth.signOut();
   }

   get appUser$() : Observable<AppUser> {
     return this.user$
     .switchMap(user => {
       if (user) return this.uService.get(user.uid);

       return Observable.of(null);
     });
   }
}
