import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';
import { LoginService } from '../services/login.service';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  LoginForm;
  navigationSubscription;

  @BlockUI() blockUI: NgBlockUI;
  constructor(private router: Router,private formBuilder:FormBuilder,private loginService:LoginService) { 

    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        // this.initialiseInvites();
        console.log("Called")
        let data={
          userName:"",
          password:""
        }
        this.loginService.setloginDetail(data);
      }
    });
  }

  ngOnInit() {
    this.LoginForm=this.formBuilder.group({
      userName:["",Validators.required],
      password:["",Validators.required]
    })
  }
  ngOnDestroy() {
    if (this.navigationSubscription) {  
       this.navigationSubscription.unsubscribe();
    }
  }

  login()
  {
    console.log("Logged In",this.LoginForm)
    if(this.LoginForm.controls.userName.value!="" && this.LoginForm.controls.password.value!="")
    {
      let data={
        userName:this.LoginForm.controls.userName.value,
        password:this.LoginForm.controls.password.value
      }
      this.loginService.setloginDetail(data);

    }
    else
    {
      this.LoginForm.controls.userName.markAsTouched();
      this.LoginForm.controls.password.markAsTouched();
    }  
    }
    callApi()
    {
      // this.blockUI.start('Loading...'); // Start blocking

      this.loginService.httpCall().subscribe(data=>{
        console.log("Data Fetchec",data)
        // this.blockUI.stop();
      })
     
    }
  
  }


