import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'yt-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChipsComponent {
  public offset: number = 0;

  @ViewChild('scrollContainer', { static: true })
  scrollContainer!: ElementRef<HTMLElement>;

  get containerWidth(): number {
    return this.scrollContainer.nativeElement.offsetWidth;
  }

  get scrollContainerWidth(): number {
    return this.scrollContainer.nativeElement.scrollWidth;
  }

  get showPrev(): boolean {
    return this.offset > 0;
  }

  get showNext(): boolean {
    return this.offset + this.containerWidth < this.scrollContainerWidth;
  }

  public prev(): void {
    this.offset = Math.max(0, this.offset - this.containerWidth);
  }

  public next(): void {
    this.offset = Math.min(
      this.offset + this.containerWidth,
      this.scrollContainerWidth - this.containerWidth
    );
  }
}
