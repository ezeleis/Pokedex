import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username!: string;
  password!: string;
  registeredUsers: Array<any> = [];

  constructor(private router: Router) { }

  onSubmit() {
    const existingUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');

    const user = existingUsers.find((user: any) => user.username === this.username && user.password === this.password);

    if (user) {
      this.router.navigate(['/list']);
    } else {
      alert('Invalid username or password');
    }
  }
}
