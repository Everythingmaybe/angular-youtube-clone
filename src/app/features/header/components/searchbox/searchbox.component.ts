import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'yt-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchboxComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public search(): void {}
}
