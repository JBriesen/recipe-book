import { Ingredient } from "app/shared/ingredient";

export class ShoppingListService {
private items: Ingredient[] = [];
  constructor() { }

  getItems(){
    return this.items;
  }

  addItems(items: Ingredient[]){
    Array.prototype.push.apply(this.items, items);// used for adding array items to nother array
                                                   // concat would create a new array, array.push would only alow 1 items 
                                                  //    with es6 it can be array.push(...array2);
  }

}
