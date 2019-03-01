import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RecipeService } from './recipe.service';
import { Recipe } from '../recipes/recipe.model';

@Injectable()
export class DataStorageService {

// tslint:disable-next-line: deprecation
  constructor(private http: Http, private recipeservice: RecipeService) {}

  storeRecipe() {
    return this.http.put('https://udemy-10753.firebaseio.com/recipes.json', this.recipeservice.getRecipes());
  }

  fetchrecipe() {
    return this.http.get('https://udemy-10753.firebaseio.com/recipes.json').subscribe(
// tslint:disable-next-line: deprecation
      (response: Response) => {
        const recipe: Recipe[] = response.json();
        this.recipeservice.addHttpRecipe(recipe);
      }
    );
  }



}
