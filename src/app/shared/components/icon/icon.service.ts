import { Inject, Injectable, SecurityContext } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import {
  DomSanitizer,
  SafeHtml,
  SafeResourceUrl,
} from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of, take, tap, throwError } from 'rxjs';

import { DEFAULT_ICONS } from '@shared/components/icon/default-icons';

class SvgIconConfig {
  public svgElement: SVGElement | null = null;

  constructor(
    public url: SafeResourceUrl,
    public literal: string | null = null
  ) {}
}

@Injectable({
  providedIn: 'root',
})
export class IconService {
  private readonly svgIconConfigs: Map<string, SvgIconConfig> = new Map<
    string,
    SvgIconConfig
  >();

  constructor(
    @Inject(DOCUMENT) private readonly document: Document,
    private readonly http: HttpClient,
    private readonly sanitizer: DomSanitizer
  ) {
    this.setDefaultIcons();
  }

  public addSvgIconByUrl(name: string, safeUrl: SafeResourceUrl): void {
    const url = this.sanitizer.sanitize(SecurityContext.RESOURCE_URL, safeUrl);

    if (!url) {
      throw Error(`Url not safe: ${safeUrl}`);
    }

    this.svgIconConfigs.set(name, new SvgIconConfig(safeUrl));
  }

  public addSvgIcon(name: string, literal: SafeHtml): void {
    const svgString = this.sanitizer.sanitize(SecurityContext.HTML, literal);

    if (!svgString) {
      throw Error(`Literal not safe: ${literal}`);
    }

    this.svgIconConfigs.set(name, new SvgIconConfig('', svgString));
  }

  public getSvgIcon(name: string): Observable<SVGElement> {
    const elementConfig = this.svgIconConfigs.get(name);

    if (!elementConfig) {
      return throwError(() => new Error(`Cannot find icon by name: ${name}`));
    }

    if (elementConfig?.svgElement) {
      return of(elementConfig.svgElement);
    }

    return (
      elementConfig.url
        ? this.getSvgIconHtmlByUrl(elementConfig.url)
        : of(elementConfig.literal)
    ).pipe(
      take(1),
      map(svgText => this.createSvgElementFromString(svgText!)),
      tap(svg => (elementConfig.svgElement = svg))
    );
  }

  private getSvgIconHtmlByUrl(url: SafeResourceUrl): Observable<string> {
    const safeUrl = this.sanitizer.sanitize(SecurityContext.RESOURCE_URL, url);

    if (!safeUrl) {
      throw Error(`Url not safe: ${url}`);
    }

    return this.http.get(safeUrl, { responseType: 'text' });
  }

  private createSvgElementFromString(value: string): SVGElement {
    const div = this.document.createElement('div');
    div.innerHTML = value;
    const svg = div.querySelector('svg');

    if (!svg) {
      throw Error(`Cannot create svg by string: ${value}`);
    }

    return svg;
  }

  private setDefaultIcons(): void {
    DEFAULT_ICONS.forEach(({ name, url }) =>
      this.addSvgIconByUrl(
        name,
        this.sanitizer.bypassSecurityTrustResourceUrl(url)
      )
    );
  }
}
