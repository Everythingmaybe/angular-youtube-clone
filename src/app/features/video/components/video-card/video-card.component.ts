import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

import { Video } from '@features/video/models/video.model';

@Component({
  selector: 'yt-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgOptimizedImage, RouterLink],
})
export class VideoCardComponent {
  @Input() video: Video;
}
