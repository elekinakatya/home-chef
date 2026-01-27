import type {Category, MealInfo, Recipe} from "./types.ts";
import csImage from '../../assets/image/cs.svg';
export const recipeMock: Recipe[] = [
    {
        id: '1',
        title: 'Pasta Carbonara',
        image: csImage,
        cookTime: 20,
        serving: 2,
    },
    {
        id: '2',
        title: 'Chicken Noodle Soup',
        image: csImage,
        cookTime: 40,
        serving: 4,
    },
    {
        id: '3',
        title: 'Caesar Salad',
        image: csImage,
        cookTime: 15,
        serving: 2,
    },
];
export const mockCategory: Category[] = [{
    idCategory: '1',
    strCategory: 'Beef',
    strCategoryThumb:
        'https://www.themealdb.com/images/category/beef.png',
    strCategoryDescription: '',
},{
    idCategory: '2',
    strCategory: 'Chicken',
    strCategoryThumb:
        'https://www.themealdb.com/images/category/chicken.png',
    strCategoryDescription: '',
},{
    idCategory: '3',
    strCategory: 'Dessert',
    strCategoryThumb:
        'https://www.themealdb.com/images/category/dessert.png',
    strCategoryDescription: '',
}

];

export interface MockMealsResponse {
    meals: MealInfo[];
}

export const mockMealInfo : MockMealsResponse = {
    meals: [
        {
            idMeal: "52772",
            strMeal: "Teriyaki Chicken Casserole",
            strMealAlternate: null,
            strCategory: "Chicken",
            strArea: "Japanese",
            strInstructions: "Preheat oven to 350° F. Spray a 9x13-inch baking pan with non-stick spray.\nCombine soy sauce, ½ cup water, brown sugar, ginger and garlic in a small saucepan and cover. Bring to a boil over medium heat. Remove lid and cook for one minute once boiling.\nMeanwhile, stir together the corn starch and 2 tablespoons of water in a separate dish until smooth. Once sauce is boiling, add mixture to the saucepan and stir to combine. Cook until the sauce starts to thicken then remove from heat.\nPlace the chicken breasts in the prepared pan. Pour one cup of the sauce over top of chicken. Place chicken in oven and bake 35 minutes or until cooked through. Remove from oven and shred chicken in the dish using two forks.\n*Meanwhile, steam or cook the vegetables according to package directions.\nAdd the cooked vegetables and rice to the casserole dish with the chicken. Add most of the remaining sauce, reserving a bit to drizzle over the top when serving. Gently toss everything together in the casserole dish until combined. Return to oven and cook 15 minutes. Remove from oven and let stand 5 minutes before serving. Drizzle each serving with remaining sauce. Enjoy!",
            strMealThumb: "https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg",
            strTags: "Meat,Casserole",
            strYoutube: "https://www.youtube.com/watch?v=4aZr5hZXP_s",
            strIngredient1: "soy sauce",
            strIngredient2: "water",
            strIngredient3: "brown sugar",
            strIngredient4: "ground ginger",
            strIngredient5: "minced garlic",
            strIngredient6: "cornstarch",
            strIngredient7: "chicken breasts",
            strIngredient8: "stir-fry vegetables",
            strIngredient9: "brown rice",
            strIngredient10: "",
            strIngredient11: "",
            strIngredient12: "",
            strIngredient13: "",
            strIngredient14: "",
            strIngredient15: "",
            strIngredient16: null,
            strIngredient17: null,
            strIngredient18: null,
            strIngredient19: null,
            strIngredient20: null,
            strMeasure1: "3/4 cup",
            strMeasure2: "1/2 cup",
            strMeasure3: "1/4 cup",
            strMeasure4: "1/2 teaspoon",
            strMeasure5: "1/2 teaspoon",
            strMeasure6: "4 Tablespoons",
            strMeasure7: "2",
            strMeasure8: "1 (12 oz.)",
            strMeasure9: "3 cups",
            strMeasure10: "",
            strMeasure11: "",
            strMeasure12: "",
            strMeasure13: "",
            strMeasure14: "",
            strMeasure15: "",
            strMeasure16: null,
            strMeasure17: null,
            strMeasure18: null,
            strMeasure19: null,
            strMeasure20: null,
            strSource: "https://therecipecritic.com/teriyaki-chicken-casserole/",
            strImageSource: null,
            strCreativeCommonsConfirmed: null,
            dateModified: null
        }
    ]
};