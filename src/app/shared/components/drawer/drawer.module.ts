import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DrawerComponent } from './drawer.component';
import { DrawerPanelDirective } from './drawer-panel.directive';

@NgModule({
  declarations: [DrawerComponent, DrawerPanelDirective],
  imports: [CommonModule],
  exports: [DrawerComponent, DrawerPanelDirective],
})
export class DrawerModule {}
