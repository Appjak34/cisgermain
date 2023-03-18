import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of, switchMap} from "rxjs";
import {Profile} from "../models/profile";
import {UserService} from "./user.service";
import {AngularFireAuth} from "@angular/fire/compat/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private _user: Profile = <Profile>{};
  private _userSubject: BehaviorSubject<Profile> = new BehaviorSubject(this._user)
  user$: Observable<Profile | null> = this._userSubject.asObservable()


  constructor(public afAuth: AngularFireAuth,
              private readonly _userService: UserService) {
    this.user$ = afAuth.authState
      .pipe(
        switchMap((user) => {
          if (user) {
            this.saveUserInStorage(user)
            return _userService.get(user.uid)
          } else {
            localStorage.setItem('user', 'null');
            return of(null)
          }
        })
      )

  }

  get user() {
    return this._userSubject.value
  }

  set user(value) {
    this._userSubject.next(value)
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user != null;
  }

  async emailLogin(email: string, password: string): Promise<boolean> {
    try {
      await this.afAuth.signInWithEmailAndPassword(email, password)
      return true
    } catch (e) {
      console.error('EmailLogin Service', e);
      return false
    }
  }

   saveUserInStorage(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  // Sign out
  async signOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
    });
  }
}
