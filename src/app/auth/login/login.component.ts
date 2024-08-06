import { Component, OnInit } from '@angular/core';

import { FormsModule, NgForm } from '@angular/forms';
import { NgClass, NgIf } from '@angular/common';
import { UserLogin } from '../../models/user-login.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ FormsModule, NgClass, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  public user : UserLogin = new UserLogin();

  public saveData(connectionForm : NgForm){
    console.log(connectionForm.form)
    console.log('valeurs : ', JSON.stringify(connectionForm.value))
  }

  ngOnInit(): void {
    
  }
}
