import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiLanguageInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const request = req.clone({
      params: req.params.append('hl', 'en'),
    });
    return next.handle(request);
  }
}
