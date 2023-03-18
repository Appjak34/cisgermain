import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthServiceService} from "../services/auth.service.service";
import {UserTypesEnum} from "../models/enums";

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor( private authServiceService: AuthServiceService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authServiceService.user.type != UserTypesEnum.admin) {
      this.router.navigate(['/admin']);
    }
    return true;
  }

}
