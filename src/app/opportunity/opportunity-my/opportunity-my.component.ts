import { Component, OnInit } from '@angular/core';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { OpportunityPagination } from '../../models/opportunity-pagination.model';
import { OpportunityService } from '../services/opportunity.service';
import { Opportunity } from '../../models/opportunity.model';
import { MatIcon } from '@angular/material/icon';


@Component({
  selector: 'app-opportunity-my',
  standalone: true,
  imports: [MatPaginatorModule, MatTableModule, MatIcon],
  templateUrl: './opportunity-my.component.html',
  styleUrl: './opportunity-my.component.css'
})
export class OpportunityMyComponent implements OnInit {
  displayedColumns: string[] = ['title', 'location', 'startDate', 'endDate', 'actions'];
  pageSizeOptions: number[] = [5, 10, 20];
  opportunityPagination: OpportunityPagination = {
    currentPage: 0,
    itemsPerPage: 2,
    totalItems: 20,
    totalPages: 0
  }
  
  dataSource: Opportunity[] = [
  ];
  


  constructor(private opportunityService: OpportunityService){
    console.log("loading opportunities")
  }

  ngOnInit(): void {
    this.fetchOpportunities(this.opportunityPagination.currentPage, this.opportunityPagination.itemsPerPage);
  }

  handlePageEvent(event: PageEvent) {
    this.fetchOpportunities(event.pageIndex, event.pageSize)
  }

 

  private fetchOpportunities(currentPage: number, itemsPerPage: number) {
    this.opportunityService.getOpportunity(currentPage, itemsPerPage)
    .subscribe(opportunityPaginated => {
      this.opportunityPagination.opportunities = opportunityPaginated.opportunities;
      this.opportunityPagination.currentPage = opportunityPaginated.currentPage;
      this.opportunityPagination.itemsPerPage = opportunityPaginated.itemsPerPage;
      this.opportunityPagination.totalItems = opportunityPaginated.totalItems;
      this.opportunityPagination.totalPages = opportunityPaginated.totalPages;
      this.dataSource = this.opportunityPagination.opportunities ?? []
      
    });
    
  }

  onEdit(element: Opportunity): void {
    console.log('Editing:', element);
    // Implement your editing logic here
    // For example, open a dialog with the details of the element
  }
}
