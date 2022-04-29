import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { UsersService } from '../users/users.service';


@Injectable({
  providedIn: 'root'
})
export class BuyGuard implements CanActivate {
  constructor(private userService: UsersService, private  router: Router){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {


    if(this.userService.isLogged() && !(this.userService.getUserRole() == '1')){
      console.log('El usuario está logueado')
      return true;
    }else{
      Swal.fire({
        title: 'Iniciar sesión',
        text: "Para comprar debes iniciar sesión",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Iniciar'
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigateByUrl('/login');
        }
      })
    return false;
    }
  }
  }

