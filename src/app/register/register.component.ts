import { Component, OnInit } from '@angular/core';
import {Router}  from '@angular/router';
import {  Http,Response } from  '@angular/http';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router:Router,private http:Http) { }
  regform: FormGroup;
  username: FormControl;
  firstname: FormControl;
  email: FormControl;

  ngOnInit() {
    // this.createForm();

    this.username = new FormControl('', Validators.required);
    this.firstname = new FormControl('', Validators.required);
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern("[^ @]*@[^ @]*")
    ]);
   
    
    this.regform = new FormGroup({
      username: this.username,
      firstname: this.firstname,
      email: this.email
    });

  }

  onSubmit(user){
     console.log(user);
    this.http.post("https://dxp-db.herokuapp.com/users",user).subscribe((res:Response) =>{
      console.log("User Sucessfully signed up!.");
      this.router.navigate(['/home']);
    });
    // this.router.navigate(['/login']);
  }
  
  createForm() {
    this.username = new FormControl('', Validators.required);
    this.firstname = new FormControl('', Validators.required);
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern("[^ @]*@[^ @]*")
    ]);
   
    
    this.regform = new FormGroup({
      username: this.username,
      firstname: this.firstname,
      email: this.email
    });
}

  loginBtn(){
  	this.router.navigate(['/login']);	
  }
}
