import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'button[yt-icon-button], a[yt-icon-button]',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class IconButtonComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
