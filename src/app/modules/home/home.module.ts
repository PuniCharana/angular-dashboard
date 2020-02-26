import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { homeComponents, routes } from './home.routes';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [...homeComponents],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
