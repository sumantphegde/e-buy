import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import {Observable} from 'rxjs/Rx';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-success',
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.css']
})


export class OrderSuccessComponent implements OnInit{
 
  
  constructor(private route: ActivatedRoute) {  }
 
  order_no : String;
  ngOnInit() {
    this.route.params.subscribe(params => {
      
     this.order_no =  params['id'] //log the value of id
    });
  }

    }
 
