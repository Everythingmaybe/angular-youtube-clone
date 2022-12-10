import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { ListModule } from '@shared/components/list/list.module';
import { ChipsModule } from '@shared/components/chips/chips.module';
import { VideoCardComponent } from '@features/video/components/video-card/video-card.component';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    ChipsModule,
    CommonModule,
    HomeRoutingModule,
    ListModule,
    NgOptimizedImage,
    VideoCardComponent,
  ],
})
export class HomeModule {}
