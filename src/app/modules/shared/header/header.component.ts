import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { faBars, faSpider, faCog, faUser, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { AppConstants } from 'src/app/core/constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faBars = faBars;
  faSpider = faSpider;
  faCog = faCog;
  faUser = faUser;
  faTimes = faTimes;
  searchFocus = false;

  appName = AppConstants.APP_NAME;

  @Output() toggleMenu = new EventEmitter();
  @Input() isMinimized: boolean;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  toggleSearchInput(focus) {
    if (window.innerWidth < 800) {
      this.searchFocus = focus;
    }
  }

  toggleSideMenu() {
    this.toggleMenu.emit();
  }

  navigateTo(path) {
    this.router.navigateByUrl(path);
  }
}
