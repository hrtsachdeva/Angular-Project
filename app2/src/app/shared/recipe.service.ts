import { Recipe } from '../recipes/recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from './ingredient.model';

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();
  recipeChanged = new EventEmitter<Recipe[]>();
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

  getRecipeByIndex(index: number) {
    return this.recipes[index];
  }

  addRecipe(newRecipe: Recipe) {
      this.recipes.push(newRecipe);
      this.recipeChanged.emit(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipeChanged.emit(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChanged.emit(this.recipes.slice());

  }

  addHttpRecipe(recipe: Recipe[]) {
    this.recipes = recipe;
    this.recipeChanged.emit(this.recipes.slice());
  }
}
