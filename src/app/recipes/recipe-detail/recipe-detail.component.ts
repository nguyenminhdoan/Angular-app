import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  recipe!: Recipe;
  id!: number;
  constructor(
    private recipesService: RecipesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.recipe = this.recipesService.getSingleRecipe(this.id);
    });
  }

  onAddToShoppingList() {
    this.recipesService.addIngredientToShoppingList(this.recipe.ingredients);
  }

  // onEditRecipe() {
  //   console.log(this.router.navigate(['']));
  //   this.router.navigate([''], { relativeTo: this.route });
  // }
}
