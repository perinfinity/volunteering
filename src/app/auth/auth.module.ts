import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { AppComponent } from '../app.component';
import { BrowserModule } from '@angular/platform-browser';




@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,

    
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    NgModule,
    HttpClient,
    ReactiveFormsModule

  ],
  providers:[
    provideHttpClient(withFetch())
  ]
  
})
export class AuthModule { 
  
}
