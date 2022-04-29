import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/users/users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {
  userId:string = ''
  constructor( private userService: UsersService, public router: Router ) { }

  ngOnInit(): void {
  }


  goCartShopping() {
    this.userId = this.userService.getUserId();
    this.router.navigate(['/cart', this.userId])
  }

}
