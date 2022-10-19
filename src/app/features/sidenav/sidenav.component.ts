import { ChangeDetectionStrategy, Component } from '@angular/core';

import { SidenavService } from '@features/sidenav/services/sidenav.service';

@Component({
  selector: 'yt-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavComponent {
  constructor(public readonly sidenavService: SidenavService) {}
}
