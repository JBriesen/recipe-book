import { Injectable } from '@angular/core';
import { Recipe } from "app/recipes/recipe";
import { Ingredient } from "app/shared/ingredient";

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe ('Shnitzel','verry tasty','http://gretchenrubin.com/wp-content/uploads/2013/09/big_small_.jpg',[
      new Ingredient('Fries',2),
      new Ingredient('Prok Meat',1)
    ]),
    new Recipe ('Summer Salad','Okayish','http://dallas.greekislesgrille.com/wp-content/uploads/2014/08/side-salad.jpg',[])
  ];
  constructor() { }

  getRecipes(){
    return this.recipes;
  }

  getRecipe(id: number){
    return this.recipes[id];
  }

  deleteRecipe(recipe: Recipe){
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }
}

