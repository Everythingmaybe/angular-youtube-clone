import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'yt-sidenav-footer',
  templateUrl: './sidenav-footer.component.html',
  styleUrls: ['./sidenav-footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavFooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
