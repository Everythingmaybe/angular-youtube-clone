import {
  ComponentRef,
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  TemplateRef,
} from '@angular/core';

import { TooltipComponent } from '@shared/components/tooltip/tooltip.component';
import { TooltipPosition } from '@shared/components/tooltip/tooltip-position';
import {
  Overlay,
  OverlayPositionBuilder,
  OverlayRef,
  ScrollDispatcher,
} from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';

@Directive({
  selector: '[ytTooltip]',
})
export class TooltipDirective implements OnInit {
  private overlayRef!: OverlayRef;
  private tooltipComponentRef: ComponentRef<TooltipComponent> | null = null;

  @Input('ytTooltip')
  public content?: string | TemplateRef<unknown>;

  @Input()
  public position: TooltipPosition = 'bottom';

  constructor(
    private overlay: Overlay,
    private overlayPositionBuilder: OverlayPositionBuilder,
    private scrollDispatcher: ScrollDispatcher,
    private elementRef: ElementRef
  ) {}

  public ngOnInit() {
    const positionStrategy = this.overlayPositionBuilder
      .flexibleConnectedTo(this.elementRef)
      .withPositions([
        {
          originX: 'center',
          originY: 'bottom',
          overlayX: 'center',
          overlayY: 'top',
        },
      ]);
    this.overlayRef = this.overlay.create({ positionStrategy });
  }

  public toggle(): void {
    this.tooltipComponentRef ? this.hide() : this.show();
  }

  @HostListener('mouseenter')
  @HostListener('focusin')
  public show(): void {
    if (!this.tooltipComponentRef) {
      this.tooltipComponentRef = this.overlayRef.attach(
        new ComponentPortal(TooltipComponent)
      );
      this.tooltipComponentRef.instance.content = this.content;
    }
  }

  @HostListener('mouseleave')
  @HostListener('focusout')
  public hide(): void {
    if (this.tooltipComponentRef) {
      this.overlayRef.detach();
      this.tooltipComponentRef = null;
    }
  }
}
