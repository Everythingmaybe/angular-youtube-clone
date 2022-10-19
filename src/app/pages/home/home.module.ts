import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ListModule } from '@shared/components/list/list.module';
import { ChipsModule } from '@shared/components/chips/chips.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    ChipsModule,
    CommonModule,
    HomeRoutingModule,
    ListModule,
    NgOptimizedImage,
  ],
})
export class HomeModule {}
