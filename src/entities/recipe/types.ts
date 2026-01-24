export type Recipe = {
    id: string;
    title: string;
    image: string;
    cookTime: number;
    serving: number;
}
export interface Category {
    idCategory: string
    strCategory: string
    strCategoryThumb: string
    strCategoryDescription: string
}
export interface Meal {
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
}

export interface CategoriesResponse {
    categories: Category[];
}

export interface MealsResponse {
    meals: Meal[];
}