import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'yt-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent {}
