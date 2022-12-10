import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav.component';
import { DrawerModule } from '@shared/components/drawer/drawer.module';
import { ListModule } from '@shared/components/list/list.module';
import { IconComponent } from '@shared/components/icon/icon.component';
import { GeneralLinksComponent } from './components/general-links/general-links.component';
import { ExploreLinksComponent } from './components/explore-links/explore-links.component';
import { MoreLinksComponent } from './components/more-links/more-links.component';
import { OtherLinksComponent } from './components/other-links/other-links.component';
import { SidenavFooterComponent } from './components/sidenav-footer/sidenav-footer.component';
import { RouterLink } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { ButtonComponent } from '@shared/components/button/button.component';

@NgModule({
  declarations: [
    ExploreLinksComponent,
    GeneralLinksComponent,
    MoreLinksComponent,
    OtherLinksComponent,
    SidenavComponent,
    SidenavFooterComponent,
    SignInComponent,
  ],
  exports: [SidenavComponent],
  imports: [
    ButtonComponent,
    CommonModule,
    DrawerModule,
    IconComponent,
    ListModule,
    RouterLink,
  ],
})
export class SidenavModule {}
