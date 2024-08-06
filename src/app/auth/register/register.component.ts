import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm, } from '@angular/forms';
import { NgClass, NgIf } from '@angular/common';
import { User } from '../../models/user.model';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, NgClass, NgIf,],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{
  public user : User = new User();

  public saveData(registerForm : NgForm){
    console.log(registerForm.form)
    console.log('valeurs : ', JSON.stringify(registerForm.value))
  }
  ngOnInit(): void {
    
  }
}
