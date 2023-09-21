import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { Food } from '../shared/models/Food';
import { Tag } from '../shared/models/tag';
import { HttpClient } from '@angular/common/http';
import {
  FOODS_TAGS_URL,
  FOODS_TAG_URL,
  FOODS_URL,
  FOOD_BY_ID_URL,
  FOOD_BY_SEARCH_URL,
} from '../shared/constants/urls';

@Injectable({
  providedIn: 'root',
})


export class FoodService {
  constructor(private http: HttpClient) {}
////////////////////////////////////////////////////////////////////

  getAll(): Observable<Food[]> {
    return this.http.get<Food[]>(FOODS_URL);
  }
/////////////////////////////////////////////////////////////////////

  getAllFoodBySearchTerm(searchTerm: string): Observable<Food[]> {
    return this.http.get<Food[]>(FOOD_BY_SEARCH_URL + searchTerm);
  }

/////////////////////////////////////////////////////////////////////
  
getFoodById(foodId: string): Observable<Food | undefined> {
    return this.http.get<Food>(FOOD_BY_ID_URL + foodId);
  }

/////////////////////////////////////////////////////////////////////

  getAllTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(FOODS_TAGS_URL);
  }

/////////////////////////////////////////////////////////////////////

  getAllFoodsByTag(tag: string): Observable<Food[]> {
    if (tag === 'All') {
      return this.getAll();
    } else {
      return this.http.get<Food[]>(FOODS_TAG_URL + tag);
    }
  }
}
