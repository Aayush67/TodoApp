import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
    providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}
  // ...
  private loginDetail;
  private validUser;
  setloginDetail(data)
  {
    this.loginDetail=data
  }
  getloginDetail()
  {
    return this.loginDetail;
  }
  getJSON()  : Observable<any> {
    return this.http.get("../assets/moc_auth.json");
  }
  getValidUserList()
  {
    return this.validUser;
  }
  setValidUserList()
  {
    this.getJSON().subscribe(data=>{
        this.validUser=data;
    })
  }
  httpCall(): Observable<any> {
    return this.http.get("https://www.concretepage.com/angular/angular-logging-http-interceptor");
  }

}