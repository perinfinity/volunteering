import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private apiUrl = 'http://localhost:3001/api/auth/register';

  constructor(private http: HttpClient) { }

  register(user: User): Observable<any> {
    return this.http.post<any>(this.apiUrl, {
      identifiant: user.id,
      name: `${user.firstName} ${user.lastName}`,
      email: user.email,
      password: user.password,
      role: user.role,
      phone: user.phone,
      org_name : user.org_name,
      bio : user.bio,
      adresse : user.address,
      create_date : user.created_at,
      updated_date : user.updated_at
    });
  }

}
