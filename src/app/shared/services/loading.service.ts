import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable()
export class LoadingService extends BehaviorSubject<boolean> {
  constructor() {
    super(false);
  }

  public load<T>(obs: Observable<T>): Observable<T> {
    this.next(true);
    return obs.pipe(
      tap({
        next: () => this.next(false),
        error: () => this.next(false),
      })
    );
  }
}
