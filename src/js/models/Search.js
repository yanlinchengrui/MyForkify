import axios from 'axios';
import { key } from '../config'

export default class Search {

    constructor(query){

        this.query = query;

    }

    async getRez() {
        
        try{
            const rez = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            
            //const rez = JSON.parse('{"data":{"count":30,"recipes":[{"publisher":"The Pioneer Woman","f2f_url":"http://food2fork.com/view/47025","title":"Pasta with Pesto Cream Sauce","source_url":"http://thepioneerwoman.com/cooking/2011/06/pasta-with-pesto-cream-sauce/","recipe_id":"47025","image_url":"http://static.food2fork.com/pestoa0e7.jpg","social_rank":100,"publisher_url":"http://thepioneerwoman.com"},{"publisher":"The Pioneer Woman","f2f_url":"http://food2fork.com/view/8f3e73","title":"The Best Lasagna Ever","source_url":"http://thepioneerwoman.com/cooking/2007/06/the_best_lasagn/","recipe_id":"8f3e73","image_url":"http://static.food2fork.com/387114468_aafd1be3404a2f.jpg","social_rank":100,"publisher_url":"http://thepioneerwoman.com"},{"publisher":"The Pioneer Woman","f2f_url":"http://food2fork.com/view/47032","title":"Shrimp Scampi","source_url":"http://thepioneerwoman.com/cooking/2011/04/16-minute-meal-shrimp-scampi/","recipe_id":"47032","image_url":"http://static.food2fork.com/scampibf5a.jpg","social_rank":100,"publisher_url":"http://thepioneerwoman.com"},{"publisher":"Two Peas and Their Pod","f2f_url":"http://food2fork.com/view/54426","title":"Creamy Avocado Pasta","source_url":"http://www.twopeasandtheirpod.com/creamy-avocado-pasta/","recipe_id":"54426","image_url":"http://static.food2fork.com/creamyavocadopasta607e.jpg","social_rank":99.99999999999989,"publisher_url":"http://www.twopeasandtheirpod.com"},{"publisher":"The Pioneer Woman","f2f_url":"http://food2fork.com/view/47275","title":"Pasta Alla Vodka","source_url":"http://thepioneerwoman.com/cooking/2008/12/friday-night-dinner-pasta-alla-vodka/","recipe_id":"47275","image_url":"http://static.food2fork.com/pastaallavodkaa870.jpg","social_rank":99.99999999999636,"publisher_url":"http://thepioneerwoman.com"},{"publisher":"The Pioneer Woman","f2f_url":"http://food2fork.com/view/46943","title":"Seafood Pasta","source_url":"http://thepioneerwoman.com/cooking/2012/03/seafood-pasta/","recipe_id":"46943","image_url":"http://static.food2fork.com/seafoodpasta5075.jpg","social_rank":99.99999999999329,"publisher_url":"http://thepioneerwoman.com"},{"publisher":"Smitten Kitchen","f2f_url":"http://food2fork.com/view/acaff5","title":"baked orzo with eggplant and mozzarella","source_url":"http://smittenkitchen.com/blog/2012/09/baked-orzo-with-eggplant-and-mozzarella/","recipe_id":"acaff5","image_url":"http://static.food2fork.com/7944232460_d833528bc615f4.jpg","social_rank":99.99999999997709,"publisher_url":"http://www.smittenkitchen.com"},{"publisher":"The Pioneer Woman","f2f_url":"http://food2fork.com/view/46882","title":"Bowtie Chicken Alfredo","source_url":"http://thepioneerwoman.com/cooking/2012/12/bowtie-chicken-alfredo/","recipe_id":"46882","image_url":"http://static.food2fork.com/chickenalfredoc9c5.jpg","social_rank":99.99999999993057,"publisher_url":"http://thepioneerwoman.com"},{"publisher":"Chow","f2f_url":"http://food2fork.com/view/9adcbc","title":"Prosciutto-Wrapped Macaroni and Cheese Cups Recipe","source_url":"http://www.chow.com/recipes/30113-prosciutto-wrapped-macaroni-and-cheese-cups","recipe_id":"9adcbc","image_url":"http://static.food2fork.com/30113_prosciutto_macaroni_cheese_cups_6204a83.jpg","social_rank":99.99999999987332,"publisher_url":"http://www.chow.com"},{"publisher":"101 Cookbooks","f2f_url":"http://food2fork.com/view/48046","title":"Stuffed Shells","source_url":"http://www.101cookbooks.com/archives/stuffed-shells-recipe.html","recipe_id":"48046","image_url":"http://static.food2fork.com/stuffedshellsrecipead02.jpg","social_rank":99.9999857649616,"publisher_url":"http://www.101cookbooks.com"},{"publisher":"Smitten Kitchen","f2f_url":"http://food2fork.com/view/c6fc03","title":"pasta and white beans with garlic-rosemary oil","source_url":"http://smittenkitchen.com/blog/2013/01/pasta-and-white-beans-with-garlic-rosemary-oil/","recipe_id":"c6fc03","image_url":"http://static.food2fork.com/8429127498_571a2722278371.jpg","social_rank":99.99999999906919,"publisher_url":"http://www.smittenkitchen.com"},{"publisher":"All Recipes","f2f_url":"http://food2fork.com/view/2658","title":"Baked Ziti I","source_url":"http://allrecipes.com/Recipe/Baked-Ziti-I/Detail.aspx","recipe_id":"2658","image_url":"http://static.food2fork.com/14573f089.jpg","social_rank":99.99999999889937,"publisher_url":"http://allrecipes.com"},{"publisher":"Closet Cooking","f2f_url":"http://food2fork.com/view/35628","title":"Taco Stuffed Shells","source_url":"http://www.closetcooking.com/2012/02/taco-stuffed-shells.html","recipe_id":"35628","image_url":"http://static.food2fork.com/Taco2BStuffed2BShells2B5002B7249e76e46ea.jpg","social_rank":99.99999999852123,"publisher_url":"http://closetcooking.com"},{"publisher":"Closet Cooking","f2f_url":"http://food2fork.com/view/35401","title":"Lasagna Soup","source_url":"http://www.closetcooking.com/2012/01/lasagna-soup.html","recipe_id":"35401","image_url":"http://static.food2fork.com/Lasagna2BSoup2B5002B050668ba78b8.jpg","social_rank":99.99999999740096,"publisher_url":"http://closetcooking.com"},{"publisher":"The Pioneer Woman","f2f_url":"http://food2fork.com/view/47296","title":"Pastor Ryan’s Pasta Carbonara","source_url":"http://thepioneerwoman.com/cooking/2008/09/cooking-with-ryan-pasta-carbonara/","recipe_id":"47296","image_url":"http://static.food2fork.com/PastaCarbonara061c.jpg","social_rank":99.99999999693264,"publisher_url":"http://thepioneerwoman.com"},{"publisher":"The Pioneer Woman","f2f_url":"http://food2fork.com/view/46922","title":"Pasta Carbonara","source_url":"http://thepioneerwoman.com/cooking/2012/05/pasta-carbonara/","recipe_id":"46922","image_url":"http://static.food2fork.com/carbonara2f55.jpg","social_rank":99.99999999592087,"publisher_url":"http://thepioneerwoman.com"},{"publisher":"The Pioneer Woman","f2f_url":"http://food2fork.com/view/47361","title":"Penne a la Betsy","source_url":"http://thepioneerwoman.com/cooking/2007/09/cooking_with_my_punk-ass_little_sister_penne_a_la_betsy/","recipe_id":"47361","image_url":"http://static.food2fork.com/PennealaBetsy12d5.jpg","social_rank":99.99999998671821,"publisher_url":"http://thepioneerwoman.com"},{"publisher":"Simply Recipes","f2f_url":"http://food2fork.com/view/35758","title":"Baked Ziti","source_url":"http://www.simplyrecipes.com/recipes/baked_ziti/","recipe_id":"35758","image_url":"http://static.food2fork.com/bakedzitia300x20038a2e5b9.jpg","social_rank":99.99999996692317,"publisher_url":"http://simplyrecipes.com"},{"publisher":"The Pioneer Woman","f2f_url":"http://food2fork.com/view/c465d3","title":"Quick and Easy Roasted Red Pepper Pasta","source_url":"http://thepioneerwoman.com/cooking/2013/05/quick-and-easy-roasted-red-pepper-pasta/","recipe_id":"c465d3","image_url":"http://static.food2fork.com/yum8ee6.jpg","social_rank":99.99999996527706,"publisher_url":"http://thepioneerwoman.com"},{"publisher":"101 Cookbooks","f2f_url":"http://food2fork.com/view/47991","title":"Winter Pasta","source_url":"http://www.101cookbooks.com/archives/winter-pasta-recipe.html","recipe_id":"47991","image_url":"http://static.food2fork.com/winter_pasta_recipebee6.jpg","social_rank":99.9999999572553,"publisher_url":"http://www.101cookbooks.com"},{"publisher":"The Pioneer Woman","f2f_url":"http://food2fork.com/view/47118","title":"Grilled Chicken with Lemon Basil Pasta","source_url":"http://thepioneerwoman.com/cooking/2010/07/grilled-chicken-with-lemon-basil-pasta/","recipe_id":"47118","image_url":"http://static.food2fork.com/4814287904_bb43e024c9_be8a9.jpg","social_rank":99.99999991847115,"publisher_url":"http://thepioneerwoman.com"},{"publisher":"101 Cookbooks","f2f_url":"http://food2fork.com/view/bc5311","title":"Ginger Coconut Milk Soup","source_url":"http://www.101cookbooks.com/archives/ginger-coconut-milk-soup-recipe.html","recipe_id":"bc5311","image_url":"http://static.food2fork.com/ginger_coconut_milk_soupf4b3.jpg","social_rank":99.99999990876967,"publisher_url":"http://www.101cookbooks.com"},{"publisher":"All Recipes","f2f_url":"http://food2fork.com/view/7202","title":"Chicken Fettuccini Alfredo","source_url":"http://allrecipes.com/Recipe/Chicken-Fettuccini-Alfredo/Detail.aspx","recipe_id":"7202","image_url":"http://static.food2fork.com/214411de5a.jpg","social_rank":99.9999995711024,"publisher_url":"http://allrecipes.com"},{"publisher":"Two Peas and Their Pod","f2f_url":"http://food2fork.com/view/54290","title":"Lemon Chicken Orzo Soup","source_url":"http://www.twopeasandtheirpod.com/lemon-chicken-orzo-soup/","recipe_id":"54290","image_url":"http://static.food2fork.com/LemonChickenOrzoSoup33989.jpg","social_rank":99.99999952354868,"publisher_url":"http://www.twopeasandtheirpod.com"},{"publisher":"The Pioneer Woman","f2f_url":"http://food2fork.com/view/47041","title":"Pasta Salad with Tomatoes, Zucchini, and Feta","source_url":"http://thepioneerwoman.com/cooking/2011/03/pasta-salad-with-tomatoes-zucchini-and-feta/","recipe_id":"47041","image_url":"http://static.food2fork.com/5566512470_9e98939ab3_z2766.jpg","social_rank":99.99999855322939,"publisher_url":"http://thepioneerwoman.com"},{"publisher":"The Pioneer Woman","f2f_url":"http://food2fork.com/view/47096","title":"Three Cheese-Stuffed Shells with Meaty Tomato Sauce","source_url":"http://thepioneerwoman.com/cooking/2010/10/three-cheese-stuffed-shells-with-meaty-tomato-sauce/","recipe_id":"47096","image_url":"http://static.food2fork.com/5053124762_fe7f70b1f1_o7fab.jpg","social_rank":99.99999549321228,"publisher_url":"http://thepioneerwoman.com"},{"publisher":"The Pioneer Woman","f2f_url":"http://food2fork.com/view/f852ec","title":"Pesto Pasta Salad","source_url":"http://thepioneerwoman.com/cooking/2013/04/pesto-pasta-salad/","recipe_id":"f852ec","image_url":"http://static.food2fork.com/pestopasta1833.jpg","social_rank":99.9999930312073,"publisher_url":"http://thepioneerwoman.com"},{"publisher":"Two Peas and Their Pod","f2f_url":"http://food2fork.com/view/054a70","title":"Baked Pasta with Spinach and Ricotta","source_url":"http://www.twopeasandtheirpod.com/baked-pasta-with-spinach-and-ricotta/","recipe_id":"054a70","image_url":"http://static.food2fork.com/SpinachBakedShells53ded.jpg","social_rank":99.9999924531229,"publisher_url":"http://www.twopeasandtheirpod.com"},{"publisher":"Two Peas and Their Pod","f2f_url":"http://food2fork.com/view/54277","title":"Creamy Tomato Orzo Soup","source_url":"http://www.twopeasandtheirpod.com/creamy-tomato-orzo-soup/","recipe_id":"54277","image_url":"http://static.food2fork.com/creamytomatoorzosoup30ac3.jpg","social_rank":99.99999243464103,"publisher_url":"http://www.twopeasandtheirpod.com"},{"publisher":"Closet Cooking","f2f_url":"http://food2fork.com/view/35498","title":"Pumpkin Mac n Cheese with Amaretti Crust","source_url":"http://www.closetcooking.com/2011/10/pumpkin-mac-n-cheese.html","recipe_id":"35498","image_url":"http://static.food2fork.com/Pumpkin2BMac2Bn2BCheese2B5002B5112462abf6a.jpg","social_rank":99.9999920107993,"publisher_url":"http://closetcooking.com"}]},"status":200,"statusText":"","headers":{"pragma":"no-cache","content-type":"text/html; charset=utf-8","cache-control":"no-store, no-cache, must-revalidate, post-check=0, pre-check=0","expires":"Fri, 15 Mar 2019 20:59:37 GMT"},"config":{"transformRequest":{},"transformResponse":{},"timeout":0,"xsrfCookieName":"XSRF-TOKEN","xsrfHeaderName":"X-XSRF-TOKEN","maxContentLength":-1,"headers":{"Accept":"application/json, text/plain, */*"},"method":"get","url":"https://www.food2fork.com/api/search?key=36ea16dd152dc18bd15c73c05b216576&q=pasta"},"request":{}}');
            this.result = rez.data.recipes;
            //console.log(rez);
        }
        catch(error){
            alert(error);
        }
    }

}