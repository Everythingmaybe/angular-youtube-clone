import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'yt-more-links',
  templateUrl: './more-links.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoreLinksComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
