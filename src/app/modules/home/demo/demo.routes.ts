import { Routes } from '@angular/router';
import { ListingComponent } from './listing/listing.component';
import { DetailComponent } from './detail/detail.component';
import { CreateComponent } from './create/create.component';

export const demoRoutes: Routes = [
  {
    path: '',
    component: ListingComponent
  },
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: ':id',
    component: DetailComponent
  }
];

export const demoComponents = [
  ListingComponent,
  DetailComponent,
  CreateComponent
];
