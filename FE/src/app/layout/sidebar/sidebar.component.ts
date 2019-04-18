import {Component, OnInit} from '@angular/core';
import {Router, NavigationEnd, Event} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  urlNotLogin: boolean;

  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.urlNotLogin = event.url !== '/re/login';
      }
    });
  }

  ngOnInit() {
  }

}
