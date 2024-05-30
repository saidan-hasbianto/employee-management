import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = 'admin';
  password: string = 'password';

  constructor(private router: Router) { }

  onLogin() {
    const hardcodedUsername = 'admin';
    const hardcodedPassword = 'password';

    if (this.username === hardcodedUsername && this.password === hardcodedPassword) {
      this.router.navigate(['/employee-list']);
    } else {
      alert('Invalid credentials');
    }
  }
}
