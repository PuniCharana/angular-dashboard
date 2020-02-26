import { Component, OnInit, Input } from '@angular/core';
import { faHome, faThLarge, faCog } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  @Input() isMinimized: boolean;
  navItems = [
    {
      title: "Dashboard",
      icon: faHome,
      action: ''
    },
    {
      title: "Demo",
      icon: faThLarge,
      action: 'demo'
    },
    {
      title: "Setting",
      icon: faCog,
      action: 'setting'
    }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigaetTo(path){
    this.router.navigateByUrl(path);
  }

}
