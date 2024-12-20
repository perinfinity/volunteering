import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { OpportunityPagination } from '../../models/opportunity-pagination.model';
import { Opportunity } from '../../models/opportunity.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class OpportunityService {


  private apiUrl = environment.apiUrl+"/api/opportunities";

  constructor(private http: HttpClient, private router: Router) { }

  getOpportunity(currentPage: number, itemsPerPage: number) : Observable<OpportunityPagination> {
    const params = new HttpParams()
    .set("page", currentPage)
    .set("size", itemsPerPage)
    // Add more params if needed (sortBy, order, etc.)
    return this.http.get<OpportunityPagination>(this.apiUrl, {params});
  }

  
  createOpportunity(opportunity: Opportunity) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer todo-auth-token'
    });

    this.http.post(this.apiUrl, opportunity, { headers, observe: 'response' })
    .subscribe((response: HttpResponse<any>) => {
      
      console.log(response)
      if(response){
        this.router.navigateByUrl("/volunteering/opportunities/my")
      }
    });
  }
}
