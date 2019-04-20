import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
// import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable()
export class AuthService {
  userList=[];
  constructor(private loginService:LoginService) {}
  // ...
  public isAuthenticated(): boolean {
    let data=this.loginService.getloginDetail();
    this.userList=this.loginService.getValidUserList()
    console.log('Data',data,this.userList)
    if(data)
    {
      var userExists=this.userList.find(t => t.userName == data.userName && t.password==data.password);
      if(userExists)
        return true;
      else
        alert("Invalid Login Details")
    }
    // alert("Invalid Login Details")
    return false;
  }
}