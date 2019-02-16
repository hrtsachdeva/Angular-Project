import { Component, OnInit} from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from 'src/app/shared/shoppinglist.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from 'src/app/shared/recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  constructor(private shoppingService: ShoppingListService,
    private route: ActivatedRoute, private recipeService: RecipeService,
    private router: Router
    ) { }
    details: Recipe;
    id: number;
  ngOnInit() {
    this.route.params.subscribe((param: Params) => {
      this.id = +param['id'];
      this.details = this.recipeService.getRecipeByIndex(this.id);
    });
  }
  editRecipe() {
    this.router.navigate(['edit'] , {relativeTo: this.route});
  }
  addToShoppingList() {
    this.shoppingService.addIngredientarray(this.details.ingredient);
  }
}
