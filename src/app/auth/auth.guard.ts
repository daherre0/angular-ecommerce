
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
  Router
} from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersService } from '../users/users.service';
import Swal from 'sweetalert2';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {


  constructor(private userService: UsersService, private  router: Router){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {


    if(this.userService.isLogged() && this.userService.getUserRole() == '1'){
      console.log('El usuario está logueado')
      return true;
    }else{
      Swal.fire({
        title: 'No autorizado',
        text: "No tienes acceso a este sitio",
        icon: 'warning',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'ok'
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigateByUrl('/home');
        }
      })
    return false;
    }
  }
}
