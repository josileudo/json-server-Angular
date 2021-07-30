import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RouteTest } from './route';

@Injectable({
  providedIn: 'root',
})
export class RouterService {
  private readonly API = 'http://localhost:3000/router';
  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<RouteTest[]>(this.API);
  }
}
