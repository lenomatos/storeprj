import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Recipe001',
      'DescTest',
      'https://assets.bonappetit.com/photos/64349ba03fd52da4745a35f4/1:1/w_3563,h_3563,c_limit/04102023-ratatouille-lede.jpg'
    ),
    new Recipe(
      'Recipe002',
      'TudoOk123',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsUa-SMt9Wvh0dx35W5mUttTMf-baW2JQaUA&usqp=CAU'
    ),
  ];

  constructor() {}

  getRecipes(){
    return this.recipes.slice();
  }

  setRecipes(){

  }
}
