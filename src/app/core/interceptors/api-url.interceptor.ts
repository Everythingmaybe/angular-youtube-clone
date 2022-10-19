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
export class ApiUrlInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const request = req.url.startsWith('/')
      ? req.clone({ url: environment.apiUrl + req.url })
      : req;
    return next.handle(request);
  }
}
