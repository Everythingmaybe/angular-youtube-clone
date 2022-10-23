import { ChangeDetectionStrategy, Component } from '@angular/core';

import { SidenavLink } from '@features/sidenav/models/sidenav-link.model';
import { SIDENAV_EXPLORE_LINKS } from '@features/sidenav/constants/sidenav-links';

@Component({
  selector: 'yt-explore-links',
  templateUrl: './explore-links.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExploreLinksComponent {
  public readonly exploreLinks: SidenavLink[] = SIDENAV_EXPLORE_LINKS;
}
