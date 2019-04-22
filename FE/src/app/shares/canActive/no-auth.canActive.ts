import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {JwtService} from '../../core/services/jwt.service';

@Injectable()
export class NoAuthGuard implements CanActivate {
  constructor(
    private jwtService: JwtService
  ) {}


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return !this.jwtService.getToken();
  }
}
