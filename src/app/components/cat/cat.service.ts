import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../shared/service/api.service';

@Injectable({
  providedIn: 'root',
})
export class CatService {
  constructor(private apiService: ApiService) {}

  getCats(path: string, params: any): Observable<any> {
    return this.apiService.get(path, this.setHttpParams(params));
  }
  getBreeds(path: string): Observable<any> {
    return this.apiService.get(path);
  }

  setHttpParams(params: any): HttpParams {
    let httpParams = new HttpParams();
    Object.keys(params).forEach((key) => {
      const value = params[key];
      if (value !== null) {
        httpParams = httpParams.append(key, value);
      }
    });
    return httpParams;
  }
}
