
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

// Original: import { Observable } from "rxjs/Observable";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  constructor(private http: HttpClient) {}

  // Original:  login(user: Any): Observable<any> {
  login(user: any): Observable<any> {
    return this.http.post("https://reqres.in/api/login", user);
  }

  register(user:any): Observable<any> {
    return this.http.post("https://reqres.in/api/register", user);
  };
}
