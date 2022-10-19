import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'yt-other-links',
  templateUrl: './other-links.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OtherLinksComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
