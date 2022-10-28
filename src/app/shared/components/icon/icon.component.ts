import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostBinding,
  Input,
} from '@angular/core';
import { take } from 'rxjs';

import { IconService } from '@shared/components/icon/icon.service';

@Component({
  selector: 'yt-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class IconComponent {
  @Input()
  set name(value: string | undefined) {
    this.removeIcon();
    if (value) {
      this.renderIcon(value);
    }
  }

  @Input()
  @HostBinding('style.font-size.px')
  size: '18' | '24' | '36' | '48' | '96' | null = null;

  constructor(
    private readonly elementRef: ElementRef<HTMLElement>,
    private readonly iconService: IconService
  ) {}

  private renderIcon(name: string): void {
    this.iconService
      .getSvgIcon(name)
      .pipe(take(1))
      .subscribe(svg => {
        this.elementRef.nativeElement.append(svg);
      });
  }

  private removeIcon(): void {
    this.elementRef.nativeElement.innerHTML = '';
  }
}
