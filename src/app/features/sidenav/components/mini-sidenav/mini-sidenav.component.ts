import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'yt-mini-sidenav',
  templateUrl: './mini-sidenav.component.html',
  styleUrls: ['./mini-sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MiniSidenavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
