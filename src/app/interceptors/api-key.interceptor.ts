import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { api_base_url, api_key } from '../data/constants';

@Injectable()
export class ApiKeyInterceptor implements HttpInterceptor {
  constructor() {}

  path: string = '/images/search';

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('x-api-key', api_key);

    const isApiUrl = request.url.startsWith(api_base_url + this.path);
    if (isApiUrl) {
      request = request.clone({
        headers: headers,
      });
    }
    return next.handle(request);
  }
}

export const ApiKeyInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: ApiKeyInterceptor,
  multi: true,
};
