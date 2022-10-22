import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  OnChanges,
} from '@angular/core';

@Component({
  selector: 'yt-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class IconComponent implements OnChanges {
  @Input()
  set fill(value: boolean | string | null) {
    this._fill = value != null && `${value}` !== 'false';
  }
  get fill(): boolean {
    return this._fill;
  }
  private _fill: boolean = false;

  @Input()
  @HostBinding('style.font-size.px')
  size: '18' | '24' | '36' | '48' | '96' | null = null;

  @HostBinding('class')
  public class: string = 'material-symbols-outlined';

  @HostBinding('style.font-variation-settings')
  public fontSettings: string | null = null;

  public ngOnChanges() {
    this.fontSettings = this.getFontSettings();
  }

  private getFontSettings(): string {
    return `
      'FILL' ${Number(this.fill)},
      'wght' 300,
      'GRAD' 0,
      'opsz' 48
    `;
  }
}
