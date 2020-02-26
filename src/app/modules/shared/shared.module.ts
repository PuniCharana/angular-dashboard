import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

const sharedComponents = [
  PageNotFoundComponent
]

const sharedModules = [
  CommonModule,
  FontAwesomeModule,
  ReactiveFormsModule,
  FormsModule
]
@NgModule({
  declarations: [...sharedComponents],
  imports: [...sharedModules],
  exports: [...sharedComponents, ...sharedModules]
})
export class SharedModule { }
