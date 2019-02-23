import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shared/shoppinglist.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  details: Ingredient;
  editMode = false;
  editedItemIndex: number ;
  editedItem: Ingredient;
  constructor(private shoppinglistservice: ShoppingListService) { }
  @Output() itemDetails = new EventEmitter<Ingredient>();
  @ViewChild('f') form_ele: NgForm;
  ngOnInit() {
    this.shoppinglistservice.startedEditing.subscribe(
      (index: number) => {
      this.editMode = true;
      this.editedItemIndex = index;
      this.editedItem = this.shoppinglistservice.getIngredientByIndex(index);
      this.form_ele.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount
      });
      }
    );
  }

  listAdd(form: NgForm) {
    if (this.editMode) {
        this.shoppinglistservice.updateIngredient(this.editedItemIndex, new Ingredient(form.value.name , form.value.amount));
        this.editMode = false;
        this.clear();
    } else {
    this.shoppinglistservice.addIngredient(new Ingredient(form.value.name , form.value.amount));
    }
  }

  clear() {
    this.form_ele.reset();
    this.editMode = false;
  }
  delete() {
    if (this.editMode) {
    this.clear();
    this.shoppinglistservice.deleteIngredient(this.editedItemIndex);
    }
  }
}
