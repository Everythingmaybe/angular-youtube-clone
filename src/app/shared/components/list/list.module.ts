import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListComponent } from './list.component';
import { ListItemComponent } from './list-item/list-item.component';
import { ListTitleComponent } from './list-title/list-title.component';

@NgModule({
  declarations: [ListComponent, ListItemComponent, ListTitleComponent],
  imports: [CommonModule],
  exports: [ListComponent, ListItemComponent, ListTitleComponent],
})
export class ListModule {}
