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

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {


  constructor(private userService: UsersService, private  router: Router){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {


    if( !this.userService.isLogged()){
      console.log()
      console.log('No estás logueado');
      this.router.navigateByUrl('/home');
      return false;
    }
    console.log('El usuario está logueado')
    return true;

  }
}
