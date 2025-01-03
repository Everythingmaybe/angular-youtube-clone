import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { IconButtonComponent } from '@shared/components/icon-button/icon-button.component';
import { IconComponent } from '@shared/components/icon/icon.component';

import { HeaderComponent } from './header.component';
import { SearchboxComponent } from './components/searchbox/searchbox.component';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '@shared/components/button/button.component';
import { TooltipModule } from '@shared/components/tooltip/tooltip.module';
import { LottieComponent } from 'ngx-lottie';

@NgModule({
  declarations: [HeaderComponent, SearchboxComponent],
  imports: [
    ButtonComponent,
    CommonModule,
    FormsModule,
    IconButtonComponent,
    IconComponent,
    LottieComponent,
    RouterLink,
    TooltipModule,
  ],
  exports: [HeaderComponent],
})
export class HeaderModule {}
