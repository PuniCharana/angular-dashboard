import { Component, OnInit, Input } from '@angular/core';
import { faHome, faThLarge, faCog, faAngleDown, faAngleUp, faListUl, faEdit } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  faAngleDown = faAngleDown;
  faAngleUp = faAngleUp;

  @Input() isMinimized: boolean;
  navItems = [
    {
      title: "Dashboard",
      icon: faHome,
      action: '',
      children: null,
      expanded: false
    },
    {
      title: "Demo",
      icon: faThLarge,
      action: '',
      expanded: false,
      children: [
        {
          title: "Listing",
          icon: faListUl,
          action: 'demo',
          children: null,
          expanded: false
        },
        {
          title: "Create",
          icon: faEdit,
          action: 'demo/create',
          children: null,
          expanded: false
        },
      ]
    },
    {
      title: "Setting",
      icon: faCog,
      action: 'setting',
      children: null,
      expanded: false
    }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigaetTo(path, index){
    if(index && this.navItems[index].children) {
      this.navItems[index].expanded = !this.navItems[index].expanded;
      return
    }
    this.router.navigateByUrl(path);
  }

}
