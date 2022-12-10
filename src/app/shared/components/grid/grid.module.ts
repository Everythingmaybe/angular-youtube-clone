import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid.component';
import { GridItemComponent } from './grid-item/grid-item.component';

@NgModule({
  declarations: [GridComponent, GridItemComponent],
  imports: [CommonModule],
})
export class GridModule {}
