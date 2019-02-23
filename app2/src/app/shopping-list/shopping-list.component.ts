import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import {ShoppingListService} from '../shared/shoppinglist.service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: []
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];
  constructor(private shoppinglistservice: ShoppingListService) { }
  ngOnInit() {
    this.ingredients = this.shoppinglistservice.getIngredients();
    this.shoppinglistservice.listRefresh.subscribe(
      (list: Ingredient[]) => {
        this.ingredients = list;
      }
    );
  }
  onEditItem(i: number) {
    this.shoppinglistservice.startedEditing.emit(i);
  }
}
