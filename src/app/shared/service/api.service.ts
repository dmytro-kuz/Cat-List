import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { api_base_url } from 'src/app/data/constants';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url: string = api_base_url;

  constructor(private httpClient: HttpClient) {}

  get<T>(path?: string, params?: HttpParams): Observable<T> {
    return this.httpClient.get<T>(this.url + path, { params: params });
  }
}
