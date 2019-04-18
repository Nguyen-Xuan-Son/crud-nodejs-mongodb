import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const jwtToken = window.localStorage['jwtToken'];
    if (jwtToken) {
      return true;
    }
    return false;
  }
}
