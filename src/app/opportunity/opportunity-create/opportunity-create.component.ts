import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { ErrorComponent } from "../../shared/error/error/error.component";
import { OpportunityService } from '../services/opportunity.service';

@Component({
  selector: 'app-opportunity-create',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, ErrorComponent],
  templateUrl: './opportunity-create.component.html',
  styleUrl: './opportunity-create.component.css'
})
export class OpportunityCreateComponent implements OnInit{

  public opportunityForm!: FormGroup;
  errorMessage: string = "" ;

  constructor(private fb: FormBuilder, private opportunityService: OpportunityService){}


  ngOnInit(): void {
      this.opportunityForm = this.fb.group({
        title: ['', [Validators.required, Validators.maxLength(100)]],
        description: ['', Validators.required],
        location: ['', Validators.maxLength(255)],
        town: ['', Validators.required],
        startDate: ['', Validators.required],
        endDate: ['', Validators.required],
        requirements: [],
        skillsRequired: [],
        categories: []
      });
  }

  onSubmit() {
    if(this.opportunityForm.valid) {
      this.opportunityService.createOpportunity(this.opportunityForm.value);
      
    } else {
      this.errorMessage = "Please fill all the required fields";
    }
  }
}
