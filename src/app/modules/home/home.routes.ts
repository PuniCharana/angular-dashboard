import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { SettingComponent } from './setting/setting.component';
import { ProfileComponent } from './profile/profile.component'
import { DemoComponent } from './demo/demo.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'setting',
    component: SettingComponent
  },
  {
    path: 'demo',
    component: DemoComponent,
    loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule)
  }
];

export const homeComponents = [
  LandingComponent,
  SettingComponent,
  ProfileComponent,
  DemoComponent
];
