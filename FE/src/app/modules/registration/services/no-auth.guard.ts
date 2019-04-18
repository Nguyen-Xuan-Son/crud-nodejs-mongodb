import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {UserService} from '../../../core/services/user.service';
import {take, map} from 'rxjs/operators';

@Injectable()
export class NoAuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private userService: UserService
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    this.userService.isAuthenticated.pipe(take(1), map(isAuth => !isAuth)).subscribe((res) => {
    });
    return this.userService.isAuthenticated.pipe(take(1), map(isAuth => !isAuth));
  }
}
