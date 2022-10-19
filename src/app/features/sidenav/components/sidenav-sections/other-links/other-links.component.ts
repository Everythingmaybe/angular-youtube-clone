import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'yt-other-links',
  templateUrl: './other-links.component.html',
  styleUrls: ['./other-links.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OtherLinksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
