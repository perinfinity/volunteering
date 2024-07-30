import { Component, OnInit } from '@angular/core';
import { UserModule } from '../../user/user.module';
import { FormsModule, NgForm } from '@angular/forms';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ FormsModule, NgClass, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  public user : UserModule = new UserModule();

  public saveData(connectionForm : NgForm){
    console.log(connectionForm.form)
    console.log('valeurs : ', JSON.stringify(connectionForm.value))
  }

  ngOnInit(): void {
    
  }
}
