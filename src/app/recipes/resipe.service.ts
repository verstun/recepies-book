import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes:Recipe[] = [
        new Recipe('A test recipe', 'this is simple test', 'https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-superJumbo.jpg'),
        new Recipe('A test recipe 2', 'this is simple test 2 ', 'http://www.seriouseats.com/recipes/assets_c/2016/05/20160503-fava-carrot-ricotta-salad-recipe-1-thumb-1500xauto-431710.jpg')
    ];

    getRecipes() {
        return this.recipes.slice();
    }
}