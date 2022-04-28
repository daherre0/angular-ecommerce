import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email!: string;
  password!: string;

  constructor(public usersService: UsersService) { }

  ngOnInit(): void {
  }
  login() {
    console.log(this.email);
    console.log(this.password);
    const user = {email: this.email, password: this.password};
    this.usersService.login(user).subscribe(data => {
      console.log(data);
    })
  }

}
