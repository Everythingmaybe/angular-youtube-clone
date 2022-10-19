import { ChangeDetectionStrategy, Component } from '@angular/core';

import { SidenavService } from '@features/sidenav/services/sidenav.service';

@Component({
  selector: 'yt-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  constructor(public readonly sidenavService: SidenavService) {}
}
