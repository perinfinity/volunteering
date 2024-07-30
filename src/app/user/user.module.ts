import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule
  ],
  bootstrap : [AppComponent]
})
export class UserModule {
  public firstName! : string;
  public lastName! : string;
  public email! : string;
  public password! : string;
  public sendCatalog! :boolean ;
 }
