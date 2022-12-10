import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'yt-grid-item',
  templateUrl: './grid-item.component.html',
  styleUrls: ['./grid-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridItemComponent {}
