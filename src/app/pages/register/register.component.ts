import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users/users.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']

})
export class RegisterComponent implements OnInit {

  email!: string;
  password!: string;
  confirmPassword!: string;
  passwordError!: boolean;

  constructor(public usersService: UsersService) { }

  ngOnInit(): void {
  }

  register() {
    console.log(this.email);
    console.log(this.password);
    if(this.password === this.confirmPassword){
    const user = {
      email: this.email,
      password: this.password
    }
    this.usersService.register(user).subscribe(
      data => {
        console.log(data);
      }
    )

  } else {
    console.log("Passwords don't match");

  }

  }
}
