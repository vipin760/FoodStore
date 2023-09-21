import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/service/order.service';
import { Order } from 'src/app/shared/models/Order';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
export class PaymentPageComponent implements OnInit, OnChanges{
   order:Order= new Order();

  
  constructor(private orderService: OrderService, private router: Router){
     orderService.getNewOrderForCurrentUser().subscribe({
      next:(order) => {
       this.order = order
       console.log(this.order.id)
      },
      error:()=>{
     router.navigateByUrl('/checkout')
      }
     })
     
     
  }
 

  ngOnInit(): void {
  }
ngOnChanges(changes: SimpleChanges): void {
 
}
  
  
}
