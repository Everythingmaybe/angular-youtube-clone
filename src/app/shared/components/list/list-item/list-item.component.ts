import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
} from '@angular/core';

import { IconComponent } from '@shared/components/icon/icon.component';

@Component({
  selector: 'yt-list-item, [yt-list-item]',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListItemComponent {
  @ContentChild(IconComponent) icon?: IconComponent;
}
