import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidenavService {
  private readonly opened: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(true);

  public readonly opened$: Observable<boolean> = this.opened.asObservable();

  public toggle(value: boolean = !this.opened.value): void {
    this.opened.next(value);
  }
}
