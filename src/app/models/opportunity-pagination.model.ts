import { Opportunity } from "./opportunity.model";

export interface OpportunityPagination {
    currentPage: number;
    itemsPerPage: number;
    totalItems: number;
    totalPages: number;
    opportunities?: Opportunity[];
}
