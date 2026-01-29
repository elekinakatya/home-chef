import type { MealInfo } from "@/entities/recipe/types.ts";
export interface MealIngredients {
    ingredients: string;
    measure: string;

}
export const getMealIngredients = ( meal: MealInfo): MealIngredients[] => {
    const ingredients: MealIngredients[] = [];
    for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}` as keyof MealInfo];
        const measure = meal[`strMeasure${i}` as keyof MealInfo];
        if (ingredient && ingredient.trim() !== '') {
            ingredients.push({
                ingredients: ingredient.trim(),
                measure: measure?.trim() || '',
            });
        }
    }
    return ingredients;
}