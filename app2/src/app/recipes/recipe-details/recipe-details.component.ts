import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from 'src/app/shared/shoppinglist.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  constructor(private shoppingService: ShoppingListService) { }
  @Input() details: Recipe;
  ngOnInit() {
  }
  addToShoppingList() {
    this.shoppingService.addIngredientarray(this.details.ingredient);
  }
}
