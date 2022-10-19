import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChipsComponent } from './chips.component';
import { ChipComponent } from './chip/chip.component';
import { IconButtonComponent } from '@shared/components/icon-button/icon-button.component';
import { IconComponent } from '@shared/components/icon/icon.component';

@NgModule({
  declarations: [ChipComponent, ChipsComponent],
  imports: [CommonModule, IconButtonComponent, IconComponent],
  exports: [ChipComponent, ChipsComponent],
})
export class ChipsModule {}
