import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'yt-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInComponent {}
