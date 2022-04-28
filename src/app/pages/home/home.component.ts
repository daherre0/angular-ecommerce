import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../users/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor(public usersService: UsersService) { }

  ngOnInit(): void {
    this.getUserLogged();
  }

  getUserLogged(){
  this.usersService.getUser().subscribe(user => {
    console.log(user);
  })
};

logout(){
  this.usersService.logout;
}
}
