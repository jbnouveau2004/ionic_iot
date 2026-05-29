import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface LoginResponse {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8000/api/login_check';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<LoginResponse> {

    return this.http.post<LoginResponse>(this.apiUrl, {
      username,
      password
    });

  }
}