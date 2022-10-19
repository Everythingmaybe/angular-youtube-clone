import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav.component';
import { DrawerModule } from '@shared/components/drawer/drawer.module';
import { ListModule } from '@shared/components/list/list.module';
import { IconComponent } from '@shared/components/icon/icon.component';
import { GeneralLinksComponent } from './components/sidenav-sections/general-links/general-links.component';
import { ExploreLinksComponent } from './components/sidenav-sections/explore-links/explore-links.component';
import { MoreLinksComponent } from './components/sidenav-sections/more-links/more-links.component';
import { OtherLinksComponent } from './components/sidenav-sections/other-links/other-links.component';
import { SidenavFooterComponent } from './components/sidenav-sections/sidenav-footer/sidenav-footer.component';
import { RouterLinkWithHref } from '@angular/router';
import { MiniSidenavComponent } from './components/mini-sidenav/mini-sidenav.component';

@NgModule({
  declarations: [
    ExploreLinksComponent,
    GeneralLinksComponent,
    MiniSidenavComponent,
    MoreLinksComponent,
    OtherLinksComponent,
    SidenavComponent,
    SidenavFooterComponent,
  ],
  exports: [SidenavComponent],
  imports: [
    CommonModule,
    DrawerModule,
    IconComponent,
    ListModule,
    RouterLinkWithHref,
  ],
})
export class SidenavModule {}
