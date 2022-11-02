import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url: string = environment.api_base_url;

  constructor(private httpClient: HttpClient) {}

  get<T>(path?: string, params?: HttpParams): Observable<T> {
    return this.httpClient.get<T>(this.url + path, { params: params });
  }
}
