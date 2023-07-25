import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
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

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
