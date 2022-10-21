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

  @ViewChild('prevArrow')
  prevArrow?: ElementRef<HTMLElement>;

  @ViewChild('nextArrow')
  nextArrow?: ElementRef<HTMLElement>;

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

  public focus(e: FocusEvent): void {
    const element: HTMLElement = e.target as HTMLElement;

    const prevArrowWidth: number =
      this.prevArrow?.nativeElement.offsetWidth ?? 0;

    const nextArrowWidth: number =
      this.nextArrow?.nativeElement.offsetWidth ?? 0;

    const newStartOffset: number = Math.max(
      element.offsetLeft - prevArrowWidth,
      0
    );

    const newEndOffset: number =
      Math.min(
        element.offsetLeft + element.offsetWidth + nextArrowWidth,
        this.scrollContainerWidth
      ) - this.containerWidth;

    this.offset =
      newStartOffset < this.offset
        ? newStartOffset
        : newEndOffset > this.offset
        ? newEndOffset
        : this.offset;
  }

  public wheel(e: WheelEvent): void {
    this.offset = Math.min(
      Math.max(0, this.offset + e.deltaY),
      this.scrollContainerWidth - this.containerWidth
    );
  }
}
