import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'yt-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridComponent {}
