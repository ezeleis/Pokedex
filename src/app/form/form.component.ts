import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  username!: string;
  password!: string;
  confirmPassword!: string;
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

  passwordsMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    if (password !== confirmPassword) {
      form.get('confirmPassword')?.setErrors({ passwordsNotMatch: true });
    } else {
      form.get('confirmPassword')?.setErrors(null);
    }
  }
}