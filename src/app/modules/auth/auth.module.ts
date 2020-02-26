import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { authComponents, routes } from './auth.routes';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [...authComponents],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AuthModule { }
