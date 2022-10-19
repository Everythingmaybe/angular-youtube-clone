import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ElementRef,
  Input,
} from '@angular/core';

import { DrawerPanelDirective } from '@shared/components/drawer/drawer-panel.directive';

@Component({
  selector: 'yt-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: 'drawer',
})
export class DrawerComponent {
  @Input()
  public set opened(value: boolean) {
    this._opened = value;
    this.cdr.markForCheck();
  }
  public get opened(): boolean {
    return this._opened;
  }
  private _opened: boolean = true;

  @ContentChild(DrawerPanelDirective, { read: ElementRef })
  drawerPanelElement?: ElementRef<HTMLElement>;

  constructor(private cdr: ChangeDetectorRef) {}

  public toggle(value: boolean = !this.opened): void {
    this.opened = value;
  }
}
