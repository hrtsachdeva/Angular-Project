import { Recipe } from '../recipes/recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from './ingredient.model';

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
       'This is a Test Recipe',
        'https://bit.ly/2TJIzUP',
        [new Ingredient('apple' , 5), new Ingredient('mango' , 5 )]
        ) ,
    new Recipe(
      'Test2 Recipe',
       'This is a Test2 Recipe',
        'https://bit.ly/2CZ5rtG',
        [new Ingredient('grapes' , 5), new Ingredient('orange' , 5 )])
  ];
  getRecipes() {
    return this.recipes.slice();
  }
}
