
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

// Original: import { Observable } from "rxjs/Observable";
import { Observable } from "rxjs";
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: "root"
})
export class UsersService {

  user = {
    id:  '',
    role: '',
    token: ''
  };
  constructor(private http: HttpClient, private cookies: CookieService) {}

  // Original:  login(user: Any): Observable<any> {
  login(user: any): Observable<any> {
    return this.http.get(`http://localhost/donutsLapiliB/web/index.php/apiregisters/login?email=${user.email}&password=${user.password}`);
  }

  register(user:any): Observable<any> {
    return this.http.post("http://localhost/donutsLapiliB/web/index.php/apiregisters", user);
  };

  setToken(token: string)
{
  this.cookies.set('token', token);
}
;
getToken() {
  return this.cookies.get('token');
}

getUser(id: string){
  // Está en veremos
  return this.http.get(`http://localhost/donutsLapiliB/web/index.php/apiregisters/${id}`);
}

getUserId(){

  return this.cookies.get('id');

}

setUserId(id:string){

  this.cookies.set('id', id);

}
getUserRole(){

  return this.cookies.get('role');

}

setUserRole(role:string){

  this.cookies.set('role', role);

}

setUser(){
  this.user.id = this.getUserId();
  this.user.role = this.getUserRole();
  this.user.token = this.getToken();

}

getUserLogged(){
  const user = this.user;
  // Aquí iría el endpoint para devolver el usuario para un token
}

isLogged(){
  // this.logout();
  // return false;
  const islogged = this.getToken() != '';
  console.log(islogged);
  console.log(this.getToken()=='');
  return islogged;
}


logout(){
  this.cookies.delete("token");
  this.cookies.delete("id");
  this.cookies.delete("role");

}


}
