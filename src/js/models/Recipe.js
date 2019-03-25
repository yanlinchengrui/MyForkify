import axios from 'axios';
import { key } from '../config'

export default class Recipe {

    constructor(id){
        this.id = id;
    }

    async getRecipe(){
        try{
            const rez = await axios(`https://www.food2fork.com/api/get?key=${key}&rId=${this.id}`);
            this.title = rez.data.recipe.title;
            this.author = rez.data.recipe.publisher;
            this.img = rez.data.recipe.image_url;
            this.url = rez.data.recipe.source_url;
            this.ingredients = rez.data.recipe.ingredients;
            console.log(this.ingredients);
        }
        catch(error){
            console.log('Something is wrong here!');
        }
    }

    calcTime() {
        // 15 min for each 3 ingredients
        const numIngredient = this.ingredients.length;
        const time = Math.ceil(numIngredient / 3) * 15;
        this.time = time;
    }

    calcServing() {
        this.servings = 4;
    }

    parseIngredients() {
        const unitsLong = ['tablespoons', 'tablespoon', 'ounces', 'ounce', 'teaspoons', 'teaspoon', 'cups', 'pounds'];
        const unitsShort = ['tbsp', 'tbsp', 'oz', 'oz', 'tsp', 'tsp', 'cup', 'pound', 'kg', 'g'];
        
        const newIngreds = this.ingredients.map(el => {
            // uniform units
            let ingredient = el.toLowerCase();
            unitsLong.forEach((unit, i) => {
                ingredient = ingredient.replace(unit, unitsShort[i]);
            });
            // remove parentheses
            
            ingredient = ingredient.replace(/ *\([^)]*\) */g, ' ');
            // parse ingred into count, unit and ingred

            const ingArray = ingredient.split(' ');
            const unitIndex = ingArray.findIndex(ell => unitsShort.includes(ell));

            let objIng;
            if(unitIndex > -1){
                // there is a unit
                // 4 1/2 cup or 4 cup
                const arrCount = ingArray.slice(0, unitIndex);
                let count;
                if(arrCount.length === 1){
                    count = eval(ingArray[0].replace('-', '+'));
                }
                else{
                    count = eval(ingArray.slice(0, unitIndex).join('+'));
                }
                objIng = {
                    count,
                    unit: ingArray[unitIndex],
                    ingredient: ingArray.slice(unitIndex + 1).join(' ')
                }
            }
            else if(parseInt(ingArray[0], 10)){
                // no unit but 1st element is num
                objIng = {
                    count: parseInt(ingArray[0], 10),
                    unit: '',
                    ingredient: ingArray.slice(1).join(' ')
                }
            }
            else if(unitIndex === -1){
                // no unit
                objIng = {
                    count: 1,
                    unit: '',
                    ingredient
                }
            }

            return objIng;
        });
        this.ingredients = newIngreds;
    }

    updateServing(type) {
        const newServe = type === 'dec' ? this.servings - 1 : this.servings + 1;
        this.ingredients.forEach(ingred => {
            ingred.count *= (newServe / this.servings);
        })
        this.servings = newServe;
    }
}