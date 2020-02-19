import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {ApiService} from '../api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  displayerror = false;
  loginKey = "";
  errMsg = this.api.err.value;
  private username = new FormControl('', Validators.required);
  private password =  new FormControl('',Validators.required);
  userDetails: any = [];
  constructor(private formBuilder:FormBuilder,private api: ApiService,private router:Router) { 

  }

  ngOnInit() {
      this.loginForm =this.formBuilder.group({
       username:this.username,
        password:this.password
      })
  }

   onSubmit() {
      this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }
  //  localStorage.setItem
    // display form values on success
    this.loginDetails(this.username.value, this.password.value);
   // this.api.
}

loginDetails(userName, Pwd) {
  this.api.getUserDetails().subscribe(data => {
        for (const [key,value] of (data as any).entries()) {
         if(value.username == userName && value.password == Pwd){
              this.api.log.next(true);
              this.api.uname.next(value.username);
              this.api.uId.next(parseInt(value.id));
              localStorage.setItem('userName', value.username);
              localStorage.setItem('log',"true");
              localStorage.setItem("userId",value.id);
              this.router.navigate(['home']);
            break;
          }else{
            this.errMsg = 'Your username & password Incorrect!';
            this.submitted = false;
            this.displayerror=true;
          }
        }
      });
  }
}
