import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from '../auth/register/register.component';
import { LoginComponent } from '../auth/login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ 

  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,

  ]
})
export class SharedModule { }
