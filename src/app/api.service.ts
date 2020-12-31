import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IFetchFeedsAPIResponse } from './api.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  fetchFeeds(page: number, limit: number) {
    return this.http.get<IFetchFeedsAPIResponse>(`https://reqres.in/api/users?page=${page}&per_page=${limit}&delay=3`);
  }
}
