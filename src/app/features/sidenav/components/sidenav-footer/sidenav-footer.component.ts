import { ChangeDetectionStrategy, Component } from '@angular/core';

import { SidenavLink } from '@features/sidenav/models/sidenav-link.model';
import {
  SIDENAV_FOOTER_LINKS,
  SIDENAV_FOOTER_LINKS_SECOND,
} from '@features/sidenav/constants/sidenav-links';

@Component({
  selector: 'yt-sidenav-footer',
  templateUrl: './sidenav-footer.component.html',
  styleUrls: ['./sidenav-footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavFooterComponent {
  public readonly sidenavSections: SidenavLink[][] = [
    SIDENAV_FOOTER_LINKS,
    SIDENAV_FOOTER_LINKS_SECOND,
  ];
}
