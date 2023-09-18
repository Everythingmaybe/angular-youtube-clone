import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'a[yt-button], button[yt-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class ButtonComponent {
  @Input('yt-button')
  set type(value: 'primary' | 'secondary' | 'ghost') {
    this.class = `yt-button-${value}`;
  }

  @HostBinding('class')
  public class: string | null = null;
}
