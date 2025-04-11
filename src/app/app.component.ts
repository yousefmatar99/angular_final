import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { LoginComponent } from "./login/login.component";
//import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  imports: [
    //RouterOutlet,
    MatFormFieldModule,
    MatInputModule,
    //  HttpClientModule
    LoginComponent
    //FormsModule
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'final';
}
