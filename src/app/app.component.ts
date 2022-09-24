import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'yt-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
