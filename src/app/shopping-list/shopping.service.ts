import { EventEmitter } from '@angular/core';
import { Ingredient } from './../shared/ingredient.model';

export class ShoppingService {
  ingredientChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Pine', 5),
  ];

  getIngredient() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientChanged.emit(this.ingredients);
  }

  addIngredientsFromRecipes(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientChanged.emit(this.ingredients.slice());
  }
}
