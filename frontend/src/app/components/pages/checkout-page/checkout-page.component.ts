import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/service/cart.service';
import { OrderService } from 'src/app/service/order.service';
import { UserService } from 'src/app/service/user.service';
import { Order } from 'src/app/shared/models/Order';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent implements OnInit{
order:Order = new Order()
checkOutForm!:FormGroup;
  constructor(
   private cartService: CartService,
   private userService:UserService,
   private fb : FormBuilder,
   private toastService: ToastrService,
   private orderService: OrderService,
   private router : Router
  ){
    const cart = cartService.getCart() 
    this.order.items = cart.items;
    this.order.totalPrice = cart.totalPrice
  }

  ngOnInit(): void {
    let { name, address} = this.userService.currentUser
    this.checkOutForm = this.fb.group({
      name:[name,Validators.required],
      address:[address,Validators.required] 
    })
 
  
  }
  get fc(){
   return this.checkOutForm.controls
  }

  createOrder(){
    if(this.checkOutForm.invalid){
      this.toastService.warning('please fill the input', ' invalid inputs'); 
      return
    }
    if(!this.order.addressLatLng){
      this.toastService.warning('Please select your location on the map', 'Location');
      return;
    }
    this.order.name = this.fc.name.value;
    this.order.address = this.fc.address.value;
    this.orderService.create(this.order).subscribe({
      next:() => {
        this.router.navigateByUrl('/payment');
      },
      error:(errorResponse) => {
        this.toastService.error(errorResponse.error, 'Cart');
      }
    })
  }
  
}
