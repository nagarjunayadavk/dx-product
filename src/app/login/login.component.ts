import { Component, OnInit } from '@angular/core';
import {Router}  from '@angular/router';
import {  Http,Response } from  '@angular/http';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private http:Http) { }
  loginform: FormGroup;
  username: FormControl;

  ngOnInit() {
    this.username = new FormControl('', Validators.required);
    this.loginform = new FormGroup({
      username: this.username
    });
  }
  onSubmit(user){
    this.http.post("https://dxp-db.herokuapp.com/login",user).subscribe((res:Response) =>{
      console.log("User Sucessfully Logged in!.");
      this.router.navigate(['/home']);
    });

    
  }
  signupBtn(){
  	this.router.navigate(['/register']);	
  }
}
