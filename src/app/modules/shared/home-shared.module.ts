import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from './shared.module';

const homeSharedComponents = [
  HeaderComponent,
  SideNavComponent,
  FooterComponent
]

@NgModule({
  declarations: [...homeSharedComponents],
  imports: [SharedModule],
  exports: [...homeSharedComponents]
})
export class HomeSharedModule { }
