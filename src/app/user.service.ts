import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { User } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //private apiUrl = 'http://localhost:3000/api/register';

  //constructor(private http: HttpClient) { }

 // register(user: User): Observable<User> {
   // return this.http.post<User>(this.apiUrl, user);
  //}
}

