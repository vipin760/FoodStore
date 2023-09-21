import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from 'src/app/service/order.service';
import { Order } from 'src/app/shared/models/Order';

@Component({
  selector: 'app-order-track-page',
  templateUrl: './order-track-page.component.html',
  styleUrls: ['./order-track-page.component.css']
})
export class OrderTrackPageComponent implements OnInit{
  order!:Order;
  constructor(
    private router: Router,
    private orderService: OrderService,
    private activateRoute: ActivatedRoute
  ){
    const params = activateRoute.snapshot.params
    console.log("params",params)
    if(!params.orderId){
      return
    }else{
      orderService.trackOrderById(params.orderId).subscribe(order=>{
        this.order = order
      })
    }
  }
  ngOnInit(): void {
    
  }

}
