import { Component, OnInit, OnDestroy } from '@angular/core';
import { DemoService } from 'src/app/core/services/demo.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit, OnDestroy {

  routeSubscription: Subscription;
  item: string;

  constructor(private demoService: DemoService, private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.routeSubscription = this.activateRoute.params.subscribe(params => {
      this.getItem(params['id']);
    });
  }

  getItem(id) {
    this.item = this.demoService.getItem(id);
  }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }

}
