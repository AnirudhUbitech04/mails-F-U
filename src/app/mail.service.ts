import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface ApiResponse {
  message: string;
  token?: string;
}

@Injectable({
  providedIn: 'root'
})
export class MailService {
  private API_URL = 'http://localhost/codeigniter/api'; 

  constructor(private http: HttpClient) {}

  register(data: any): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${this.API_URL}/register`, data);
  }

  forgotPassword(email: string): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${this.API_URL}/forgot-password`, { email });
  }

  resetPassword(token: string, newPassword: string): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${this.API_URL}/reset-password`, { token, newPassword });
  }

  updatePassword(data: any): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${this.API_URL}/update-password`, data);
  }
}




// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class MailService {
//   private API_URL = 'http://localhost/codeigniter/api'; 

//   constructor(private http: HttpClient) {}

//   register(data: any) {
//     return this.http.post(`${this.API_URL}/register`, data);
//   }

//   forgotPassword(email: string) {
//     return this.http.post(`${this.API_URL}/forgot-password`, { email });
//   }

//   resetPassword(token: string, newPassword: string) {
//     return this.http.post(`${this.API_URL}/reset-password`, { token, newPassword });
//   }

//   updatePassword(data: any) {
//     return this.http.post(`${this.API_URL}/update-password`, data);
//   }
// }
