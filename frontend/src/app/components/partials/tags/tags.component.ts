import { Component } from '@angular/core';
import { FoodService } from 'src/app/service/food.service';
import { Tag } from 'src/app/shared/models/tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {
  tags!:Tag[];
  constructor(private foodservice: FoodService){
    foodservice.getAllTags().subscribe((data:Tag[])=>{
      this.tags = data
    })
  }

}
