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
import { environment } from 'src/environments/environment';

@Injectable()
export class ApiKeyInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('x-api-key', environment.api_key);

    const isApiUrl = request.url.startsWith(environment.api_base_url);
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
