import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';
import { FoodService } from 'src/app/service/food.service';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit{
  food!:Food;
  constructor(private activatedRoute:ActivatedRoute, private foodService: FoodService , private router: Router, private cartService: CartService){
    
    activatedRoute.params.subscribe((params)=>{
      if(params.id){
        this.foodService.getFoodById(params.id).subscribe((data:Food | undefined)=>{
          if(data){
            this.food = data
          }
        })
      }
    })
  }

  ngOnInit():void{
 
    
  }

addToCart(){
  this.cartService.addToCart(this.food)
  this.router.navigateByUrl('/cart-page')
}
}
