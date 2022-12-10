import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeApiService {
  constructor(private readonly http: HttpClient) {}

  list(): Observable<any> {
    return this.http.get(
      '/videos?chart=mostPopular&part=snippet,statistics,player&maxResults=50'
    );
  }
}
