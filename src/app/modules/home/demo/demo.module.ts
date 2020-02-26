import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { demoComponents, demoRoutes } from './demo.routes';



@NgModule({
  declarations: [...demoComponents],
  imports: [
    SharedModule,
    RouterModule.forChild(demoRoutes)
  ]
})
export class DemoModule { }
