import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RouteTest } from './route';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RouterService {
  private readonly API = 'http://localhost:3000/router';
  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<RouteTest[]>(this.API).pipe(tap(console.log));
  }
}
