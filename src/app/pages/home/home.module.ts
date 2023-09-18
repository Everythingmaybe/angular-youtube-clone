import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { ListModule } from '@shared/components/list/list.module';
import { ChipsModule } from '@shared/components/chips/chips.module';
import { GridModule } from '@shared/components/grid/grid.module';
import { VideoCardComponent } from '@features/video/components/video-card/video-card.component';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { TooltipModule } from '@shared/components/tooltip/tooltip.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    ChipsModule,
    CommonModule,
    GridModule,
    HomeRoutingModule,
    ListModule,
    NgOptimizedImage,
    TooltipModule,
    VideoCardComponent,
  ],
})
export default class HomeModule {}
