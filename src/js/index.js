// Global app controller

//import{ add as a, multiply as m, ID } from './views/searchView';
//import * as searchView from './views/searchView';

import Search from './models/Search';
import Recipe from './models/Recipe';
import List from './models/List';
import Like from './models/Like';
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
import * as listView from './views/listView';
import * as likeView from './views/likeView';

import { elements, renderLoader, clearLoader } from './views/base'

// Global state of the app
// - Search
// - Current recipe
// - Shopping list
// - Liked recipes
const state = {};

// search controller

const controlSearch = async () => {
    // get query from view
    const query = searchView.getInput();

    if(query){
        // new search obj and add to state
        state.search = new Search(query);

        // prepare UI for results
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchRes);

        try{
            // search for recipes
            await state.search.getRez();
            // render results on UI
            clearLoader();
            searchView.renderRez(state.search.result);
        }
        catch(error){
            alert('Something wrong with the search');
            clearLoader();
        }
    }
}

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});

elements.searchResPages.addEventListener('click', e => {
    const btn = e.target.closest('.btn-inline');
    if (btn) {
        const goToPage = parseInt(btn.dataset.goto, 10);
        searchView.clearResults();
        searchView.renderRez(state.search.result, goToPage);
    }
});



// recipe control

const controlRecipe = async () => {
    const id = window.location.hash.replace('#', '');
    recipeView.clearRecipe();
    renderLoader(elements.recipe);
    // get id from url and prepare UI for changes
    if(state.search) searchView.highlightSelected(id);
    if(id) {
        state.recipe = new Recipe(id);
        try{
            await state.recipe.getRecipe();
            state.recipe.parseIngredients();
            state.recipe.calcTime();
            state.recipe.calcServing();
            
            clearLoader();
            recipeView.renderRecipe(state.recipe, state.likes.isLiked(id));
        }
        catch(error){
            alert(error.message);
        }
    }
}



// list control

const controlList = () => {
    if(!state.list) state.list = new List();
    state.recipe.ingredients.forEach(e => {
        const item = state.list.addItem(e.count, e.unit, e.ingredient);
        listView.renderItem(item);
    });
}

elements.shopping.addEventListener('click', e => {
    const id = e.target.closest('.shopping__item').dataset.itemid;
    console.log(id);
    if(e.target.matches('.shopping__delete, .shopping__delete *')){
        state.list.deleteItem(id);
        listView.deleteItem(id);
    }
    else if(e.target.matches('.shopping__val')){
        const val = parseFloat(e.target.value, 10);
        state.list.updateCount(val);
    }
});



// like control

const controlLike = () => {
    if(!state.likes) state.likes = new Like();

    const curId = state.recipe.id;
    //console.log(curId);
    if(!state.likes.isLiked(curId)){
        const newLike = state.likes.addLike(
            curId, state.recipe.title, state.recipe.author, state.recipe.img
        );
        likeView.toggleLiked(true);
        likeView.renderLike(newLike);
        //console.log(state.likes);
    }
    else{
        state.likes.deleteLike(curId);
        likeView.toggleLiked(false);
        likeView.deleteLike(curId);
        //console.log(state.likes);
    }
    likeView.toggleLikedList(state.likes.getLikeNum());
}

window.addEventListener('load', () => {
    state.likes = new Like();
    state.likes.retrieveData();
    likeView.toggleLikedList(state.likes.getLikeNum());
    state.likes.likes.forEach(like => likeView.renderLike(like))
});



// window.addEventListener('hashchange', controlRecipe);
// window.addEventListener('load', controlRecipe);
['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));

// button in recipe
elements.recipe.addEventListener('click', e => {
    if(e.target.matches('.btn-dec, .btn-dec *')){
        if(state.recipe.servings > 1) {
            state.recipe.updateServing('dec');
            recipeView.updateIngred(state.recipe);
        }
    }
    else if(e.target.matches('.btn-inc, .btn-inc *')){
        state.recipe.updateServing('inc');
        recipeView.updateIngred(state.recipe);
    }
    else if(e.target.matches('.recipe__btn__add, .recipe__btn__add *')){
        controlList();
    }
    else if(e.target.matches('.recipe__love, .recipe__love *')){
        controlLike();
    }
});