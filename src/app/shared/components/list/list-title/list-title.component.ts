import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'yt-list-title',
  templateUrl: './list-title.component.html',
  styleUrls: ['./list-title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListTitleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
