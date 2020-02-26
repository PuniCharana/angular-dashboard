import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  _SMALL_SCREEN = 800; // Screen break point
  _NAV_MAX_WIDTH = 220; // Side nav max width
  _NAV_SMALL_WIDTH = 60; // Side nav small width
  _NAV_MIN_WIDTH = 0; // Side nav max width

  navWidth = this._NAV_MAX_WIDTH;
  contentMargin = this._NAV_MIN_WIDTH;
  minimized = false;
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.updateScreen();
  }
  private _routerSub = Subscription.EMPTY;

  constructor(private router: Router) {
    // Listen for URL changes
    this._routerSub = this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(result => {
      if (window.innerWidth < this._SMALL_SCREEN) {
        this.navWidth = 0;
      }
    })
  }

  ngOnInit() {
    this.updateScreen();
  }

  updateScreen() {
    if (window.innerWidth <= this._SMALL_SCREEN) {
      this.navWidth = this._NAV_MIN_WIDTH;
      this.contentMargin = this._NAV_MIN_WIDTH;
    } else {
      this.navWidth = this._NAV_MAX_WIDTH;
      this.contentMargin = this._NAV_MAX_WIDTH;
    }
  }

  toggleNavMenu() {
    this.minimized = false;
    if (window.innerWidth <= this._SMALL_SCREEN) {
      // Small screen
      this.contentMargin = this._NAV_MIN_WIDTH;
      if (this.navWidth < this._NAV_MAX_WIDTH) {
        this.navWidth = this._NAV_MAX_WIDTH;
      } else {
        this.navWidth = this._NAV_MIN_WIDTH;
      }
    } else {
      // Large screen
      if (this.navWidth < this._NAV_MAX_WIDTH) {
        this.navWidth = this._NAV_MAX_WIDTH;
        this.contentMargin = this._NAV_MAX_WIDTH;
      } else {
        this.minimized = true;
        this.navWidth = this._NAV_SMALL_WIDTH;
        this.contentMargin = this._NAV_SMALL_WIDTH;
      }

    }
  }
  ngOnDestroy() {
    this._routerSub.unsubscribe();
  }

}
