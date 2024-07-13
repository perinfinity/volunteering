import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { OpportunityPagination } from '../../models/opportunity-pagination.model';

@Injectable({
  providedIn: 'root'
})
export class OpportunityService {

  private apiUrl = environment.apiUrl+"/opportunities";

  constructor(private http: HttpClient) { }

  getOpportunity(currentPage: number, itemsPerPage: number) : Observable<OpportunityPagination> {
    console.log("fetching opportunities", this.apiUrl)
    const params = new HttpParams()
    .set("page", currentPage)
    .set("pageSize", itemsPerPage)
    // Add more params if needed (sortBy, order, etc.)
    return this.http.get<OpportunityPagination>(this.apiUrl);
  }
}
