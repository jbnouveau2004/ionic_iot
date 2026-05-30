import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { DataService } from '../services/data.service';

export interface LoginResponse {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private dataService: DataService) {}

  login(username: string, password: string): Observable<LoginResponse> {

    return this.http.post<LoginResponse>(this.dataService.apiHost + '/api/login_check', {
      username,
      password
    });

  }
}