import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { Cart } from 'src/app/shared/models/Cart';
import { CartItem } from 'src/app/shared/models/cartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit{
cart!:Cart
  constructor(private cartService: CartService){
    this.cartService.getCartObservable().subscribe((data)=>{
      this.cart = data
    })
  }

  ngOnInit(): void {
    
  }
  removeFromCart(cartItem:CartItem){
    this.cartService.removeItems(cartItem.food.id)
  }

  changeQuantity(cartItem:CartItem, quantityInString:string){
    const quantity = parseInt(quantityInString)
    this.cartService.changeQuantity(cartItem.food.id,quantity)
  }

}
