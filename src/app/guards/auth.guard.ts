import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';

import { Observable } from 'rxjs';
import {AuthServiceService} from "../services/auth.service.service";
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor( private authServiceService: AuthServiceService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    console.log(this.authServiceService.isLoggedIn)
    if (!this.authServiceService.isLoggedIn) {
      window.alert('Acceso denegado, Login es requerido para acceder a la plataforma!');
      this.router.navigate(['login']);
    }
    return true;
  }

}
