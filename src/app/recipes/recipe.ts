import { Ingredient } from "app/shared/ingredient";

export class Recipe {
    constructor(public name:string, public desciption:string, public imagePath:string, public ingredients: Ingredient[]){
    }
}
