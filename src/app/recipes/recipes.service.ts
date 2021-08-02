import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from '../shopping-list/shopping.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipesService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipe: Recipe[] = [
    new Recipe(
      'test name',
      'test desc',
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      [new Ingredient('meat', 2), new Ingredient('bean', 1)]
    ),
    new Recipe(
      'test name2',
      'test desc3',
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      [new Ingredient('rice', 2), new Ingredient('banana', 10)]
    ),
  ];

  constructor(private shoppingListService: ShoppingService) {}

  getRecipes() {
    return this.recipe.slice();
  }

  getSingleRecipe(index: number) {
    return this.recipe[index];
  }

  addIngredientToShoppingList(ingredient: Ingredient[]) {
    // console.log(ingredient);
    this.shoppingListService.addIngredientsFromRecipes(ingredient);
  }
}
