import { ChangeDetectionStrategy, Component } from '@angular/core';
import { map } from 'rxjs';

import { HomeApiService } from '@pages/home/services/home-api.service';
import { LoadingService } from '@shared/services/loading.service';

@Component({
  selector: 'yt-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [LoadingService],
})
export class HomeComponent {
  public videos$ = this.loading$.load(
    this.homeApiService.list().pipe(map((response: any) => response.items))
  );

  constructor(
    private readonly homeApiService: HomeApiService,
    public readonly loading$: LoadingService
  ) {}
}
