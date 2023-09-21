import { Component } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/shared/models/User';

@Component({
  selector: 'app-header', 
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  user!:User;
  cartQuantity:number=0
  constructor(private cartService: CartService, private userService: UserService){
    this.cartService.getCartObservable().subscribe((newCart)=>{
      this.cartQuantity = newCart.totalCount
    })
    userService.userObservable.subscribe((user)=>{
        this.user = user
    })
  }
  logout(){
    this.userService.logout()
  }
  get isAuth(){
   return this.user.token
  }

}
