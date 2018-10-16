import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth'

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  user$ : Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth, private route: ActivatedRoute) {
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
}
