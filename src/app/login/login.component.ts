import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username!: string;
  password!: string;
  registeredUsers: Array<any> = [];

  constructor() { }

  onSubmit() {
    console.log(`Username: ${this.username} Password: ${this.password}`);
    const user = {
      username: this.username,
      password: this.password
    };
  
    const existingUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');

    existingUsers.push(user);

    localStorage.setItem('registeredUsers', JSON.stringify(existingUsers));
 
    console.log(existingUsers);
  }
}
