import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response, Headers } from '@angular/http';
// import 'orders' from './data/orders';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(private router: Router, private http: Http) { }
  private orders: any;

  ngOnInit() {
    // this.http.get("./data/orders.json").subscribe((res:Response) =>{
    //   console.log(res);
    // });
    let orders = {
      "orders": [{
        "name": "product 1",
        "imgurl": "http://hpservicecenterschennai.in/images/hp_laptop_service_centers_in_guindy.png",
        "price": "200 INR",
        "status": "Delivered"
      },
      {
        "name": "product 2",
        "imgurl": "http://hpservicecenterschennai.in/images/hp_laptop_service_centers_in_guindy.png",
        "price": "5000 INR",
        "status": "Delivered"
      },
      {
        "name": "product 3",
        "imgurl": "http://hpservicecenterschennai.in/images/hp_laptop_service_centers_in_guindy.png",
        "price": "750 INR",
        "status": "Delivered"
      },
      {
        "name": "product 4",
        "imgurl": "http://hpservicecenterschennai.in/images/hp_laptop_service_centers_in_guindy.png",
        "price": "100 INR",
        "status": "Delivered"
      }
      ]
    };
    this.orders = orders.orders;

  }

}
