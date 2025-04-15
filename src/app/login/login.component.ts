import { Component } from '@angular/core';
import { LoggerService } from '../services/logger.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email = ""
  password = ""
  constructor(private loggerService: LoggerService) {}
  onLogin(){
    this.loggerService.login(this.email, this.password);
  }
}
