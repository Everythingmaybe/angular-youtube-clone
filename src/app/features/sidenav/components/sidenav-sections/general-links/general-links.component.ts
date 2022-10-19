import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'yt-general-links',
  templateUrl: './general-links.component.html',
  styleUrls: ['./general-links.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GeneralLinksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
