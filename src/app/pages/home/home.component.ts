import { ChangeDetectionStrategy, Component } from '@angular/core';
import { map } from 'rxjs';

import { HomeApiService } from '@pages/home/services/home-api.service';

@Component({
  selector: 'yt-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  public videos$ = this.homeApisService
    .list()
    .pipe(map((response: any) => response.items));

  constructor(private readonly homeApisService: HomeApiService) {}
}
