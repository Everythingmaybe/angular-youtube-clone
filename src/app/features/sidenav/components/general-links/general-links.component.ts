import { ChangeDetectionStrategy, Component } from '@angular/core';

import { SidenavLink } from '@features/sidenav/models/sidenav-link.model';
import {
  SIDENAV_GENERAL_LINKS,
  SIDENAV_GENERAL_LINKS_SECOND,
} from '@features/sidenav/constants/sidenav-links';

@Component({
  selector: 'yt-general-links',
  templateUrl: './general-links.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GeneralLinksComponent {
  public readonly generalLinksSections: SidenavLink[][] = [
    SIDENAV_GENERAL_LINKS,
    SIDENAV_GENERAL_LINKS_SECOND,
  ];
}
