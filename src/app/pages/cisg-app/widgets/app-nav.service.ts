import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {AuthServiceService} from "../../../services/auth.service.service";

@Injectable({
  providedIn: 'root'
})
export class AppNavService {
  private _openNav: boolean = false;
  private _openMenu: boolean = false;
  openNav$: BehaviorSubject<boolean>;
  openMenu$: BehaviorSubject<boolean>;

  constructor(private _authServiceService: AuthServiceService) {
    this.openNav$ = new BehaviorSubject<boolean>(this._openNav);
    this.openMenu$ = new BehaviorSubject<boolean>(this._openMenu);
  }

  openMenu() {
    this._openMenu = !this._openMenu;
    this.openMenu$.next(this._openMenu);
  }

  openNav() {
    this._openNav = !this._openNav;
    this.openNav$.next(this._openNav);
  }

  singOut() {
    this._authServiceService.signOut()
  }

  get isOpenNav() {
    return this.openNav$.value;
  };

  get isOpenMenu() {
    return this.openMenu$.value;
  };
  get user$() {
    return this._authServiceService.user$
  }
  get user() {
    return this._authServiceService.user
  }

}
