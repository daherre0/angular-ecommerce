import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']

})
export class RegisterComponent implements OnInit {

  confirmPassword!: string;
  passwordError!: boolean;

  /* User payload */
  name!: string;
  lastName!: string;
  username!: string;
  email!: string;
  address!: string;
  phone!: string;
  password!: string;


  constructor(public usersService: UsersService, public router: Router) { }

  ngOnInit(): void {
  }

  register() {
    console.log(this.email);
    console.log(this.password);
    if(this.password === this.confirmPassword){
    const user = {
      name: this.name,
      lastName: this.lastName,
      username: this.username,
      email: this.email,
      address: this.address,
      phone: this.phone,
      password: this.password,
    };
    this.usersService.register(user).subscribe(
      data => {
        /* console.log(user)
        console.log(data); */
        this.usersService.setToken(data.auth_key);
        this.usersService.setUserId(data.id);
        this.usersService.setUserRole(data.role);
        this.router.navigateByUrl('home');

      },
      error => {
        console.log(error.error);
      }
    )

  } else {
    console.log("Passwords don't match");

  }

  }

  /* Listo, si abres la página de register,
  metes el email

  eve.holt@reqres.in


  y la contraseña que quieras
  verás que se devuelve por consola el token.

  Si abres la página y intentas hacer login o register
  y abres las herramientas de desarrollador del navegador
  (Botón derecho > Inspeccionar elemento).
  En una de las pestañas podrás ver las cookies que almacena el navegador
  y una de ellas será la del token. */

}
