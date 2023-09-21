import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FoodService } from 'src/app/service/food.service';
import { Food } from 'src/app/shared/models/Food';
import { Tag } from 'src/app/shared/models/tag';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  foods!: Food[];

  constructor(
    private FoodService: FoodService,
    private activatedRoute: ActivatedRoute
  ) {
    let foodObservable: Observable<Food[]>;
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm)
        foodObservable = this.FoodService.getAllFoodBySearchTerm(
          params.searchTerm
        );
      else if (params.tag)
        foodObservable = this.FoodService.getAllFoodsByTag(params.tag);
      else foodObservable = FoodService.getAll();
      foodObservable.subscribe((serverFoods) => {
        this.foods = serverFoods;
      });
    });
  }

  ngOnInit(): void {}
}

















































// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { FoodService } from 'src/app/service/food.service';
// import { Food } from 'src/app/shared/models/Food';
// import { Tag } from 'src/app/shared/models/tag';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css']
// })
// export class HomeComponent implements OnInit{
//   foods!:Food[]

//   constructor(private FoodService: FoodService, private activatedRoute: ActivatedRoute){
//     activatedRoute.params.subscribe((params)=>{
//       if(params.searchTerm){
//         this.FoodService.getAllFoodBySearchTerm(params.searchTerm).subscribe((data:Food[])=>{
//           console.log("search",data)
//           this.foods = data
//         })
//       }else if(params.tag){
//         this.FoodService.getAllFoodsByTag(params.tag).subscribe((data:Food[])=>{
//           this.foods = data
//           console.log("tag food",data);

//         })
//       }else{
//         this.FoodService.getAll().subscribe((data:Food[])=>{
//           console.log("working");
//           this.foods = data
//         })
//       }
//     })
//   }

//   ngOnInit():void{

//   }

// }
