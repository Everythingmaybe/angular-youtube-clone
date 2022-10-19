import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'yt-explore-links',
  templateUrl: './explore-links.component.html',
  styleUrls: ['./explore-links.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExploreLinksComponent implements OnInit {
  public readonly categories$: Observable<any[]> = this.http
    .get<any>('/videoCategories?part=snippet&hl=ru')
    .pipe(map(({ items }) => items));

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}
}
