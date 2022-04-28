import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../users/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  user!: any;


  constructor(public usersService: UsersService) { }

  ngOnInit(): void {
    this.getUserLogged();
  }

  getUserLogged(){
  this.usersService.getUser(this.usersService.getUserId()).subscribe(user => {
    console.log(user);
    this.user = user;
  })
};

logout(){
  this.usersService.logout;
}
}
