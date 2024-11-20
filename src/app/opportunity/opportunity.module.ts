import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OpportunityCreateComponent } from './opportunity-create/opportunity-create.component';


@NgModule({
  declarations: [],
  imports: [
    OpportunityCreateComponent,
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class OpportunityModule { }
