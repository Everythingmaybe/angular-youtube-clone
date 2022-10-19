import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'a[yt-chip], button[yt-chip]',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChipComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
