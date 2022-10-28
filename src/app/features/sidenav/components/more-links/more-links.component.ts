import { ChangeDetectionStrategy, Component } from '@angular/core';

import { SidenavLink } from '@features/sidenav/models/sidenav-link.model';
import { SIDENAV_MORE_LINKS } from '@features/sidenav/constants/sidenav-links';

@Component({
  selector: 'yt-more-links',
  templateUrl: './more-links.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoreLinksComponent {
  public readonly moreLinks: SidenavLink[] = SIDENAV_MORE_LINKS;
}
