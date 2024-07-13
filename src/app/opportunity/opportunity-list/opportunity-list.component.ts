import { Component, OnInit } from '@angular/core';
import { OpportunityService } from '../services/opportunity.service';
import { OpportunityPagination } from '../../models/opportunity-pagination.model';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-opportunity-list',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule],
  templateUrl: './opportunity-list.component.html',
  styleUrl: './opportunity-list.component.css'
})
export class OpportunityListComponent implements OnInit{

  opportunityPagination: OpportunityPagination = {
    currentPage: 1,
    itemsPerPage: 10,
    totalItems: 0,
    totalPages: 0
  }

  constructor(private opportunityService: OpportunityService){
    console.log("loading opportunities")
  }

  ngOnInit(): void {
    this.fetchOpportunities(); // TODO: rajouter le mecanisme de pagination
  }

  private fetchOpportunities() {
    this.opportunityService.getOpportunity(this.opportunityPagination.currentPage, this.opportunityPagination.itemsPerPage).subscribe(opportunityPaginated => {
      this.opportunityPagination.opportunities = opportunityPaginated.opportunities;
      this.opportunityPagination.totalItems = opportunityPaginated.totalItems;
      this.opportunityPagination.totalPages = opportunityPaginated.totalPages;
      console.log("opportunities list", opportunityPaginated)
    });
  }

  onPageChange(newPage: number) {
    this.opportunityPagination.currentPage = newPage;
    this.fetchOpportunities()
  }
}
