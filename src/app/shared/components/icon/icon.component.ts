import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';

@Component({
  selector: 'yt-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class IconComponent {
  @HostBinding('class')
  public class: string = 'material-symbols-outlined';

  @HostBinding('style.font-size.px')
  @Input()
  size: '18' | '24' | '36' | '48' | null = null;
}
