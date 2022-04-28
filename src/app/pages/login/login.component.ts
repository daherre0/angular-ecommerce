import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email!: string;
  password!: string;

  constructor(public usersService: UsersService, public router: Router) { }

  ngOnInit(): void {
  }

  /* Listo, si abres la página de login,
  metes el email

  eve.holt@reqres.in

  y la contraseña que quieras
  verás que se devuelve por consola el token.

  Si abres la página y intentas hacer login o register
  y abres las herramientas de desarrollador del navegador
  (Botón derecho > Inspeccionar elemento).
  En una de las pestañas podrás ver las cookies que almacena el navegador
  y una de ellas será la del token.*/
  login() {
    console.log(this.email);
    console.log(this.password);
    const user = {email: this.email, password: this.password};
    this.usersService.login(user).subscribe(data => {
      this.usersService.setToken(data.token);
      this.router.navigateByUrl('/')
      console.log(data);
    },
    error => {
      console.log(error.error);
    })
  }

}
