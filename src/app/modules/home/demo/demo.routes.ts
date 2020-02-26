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
    path: ':id',
    component: DetailComponent
  },
  {
    path: 'create',
    component: CreateComponent
  }
];

export const demoComponents = [
  ListingComponent,
  DetailComponent,
  CreateComponent
];
