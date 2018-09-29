import { Component, OnInit } from '@angular/core';
import {Router}  from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  onSubmit(){
    this.router.navigate(['/login']);
  }

  loginBtn(){
  	this.router.navigate(['/login']);	
  }
}
