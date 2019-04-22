import {Component} from '@angular/core';
import {NavigationEnd, Router, Event} from '@angular/router';
import {JwtService} from './core/services/jwt.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public isShowHeader: boolean;

  constructor(
    private router: Router,
    private jwtService: JwtService
  ) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.isShowHeader = ( event.url !== '/login' && !!this.jwtService.getToken());
      }
    });
  }
}
