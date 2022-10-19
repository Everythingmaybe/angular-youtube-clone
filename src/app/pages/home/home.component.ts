import {
  ChangeDetectionStrategy,
  Component,
  SecurityContext,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Component({
  selector: 'yt-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  context = SecurityContext;
  public videos$ = this.http
    .get(
      '/videos?chart=mostPopular&regionCode=JP&part=snippet,player&maxResults=50'
    )
    .pipe(map((response: any) => response.items));

  constructor(private http: HttpClient) {}
}
