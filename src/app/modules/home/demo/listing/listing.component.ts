import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DemoService } from 'src/app/core/services/demo.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {

  items = [];
  constructor(private router: Router, private demoService: DemoService) { }

  ngOnInit() {
    this.items = this.demoService.getItems()
  }

  navigateTo(path) {
    this.router.navigateByUrl('demo/' + path);
  }

}
