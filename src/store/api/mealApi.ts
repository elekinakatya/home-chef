import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import type {CategoriesResponse, MealsResponse} from "../../entities/recipe/types.ts";

export const mealApi = createApi({
    reducerPath: 'mealApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://www.themealdb.com/api/json/v1/1/' }),
    endpoints: (builder) => ({
        getRandomMeal: builder.query<MealsResponse, void>({
            query: () => 'random.php',
        }),
        getMealById: builder.query<MealsResponse, string>({
            query: (id: string) => `lookup.php?i=${id}`,
        }),
        searchMealsByName: builder.query<MealsResponse, string>({
            query: (name: string) => `search.php?s=${name}`,
        }),
        getMealCategories: builder.query<CategoriesResponse, void>({
            query: () => 'categories.php',
        }),
        filterByCategory: builder.query<MealsResponse, string>({
            query: (category: string) => `filter.php?c=${category}`,

        }),
    }),
});

export const {
    useGetRandomMealQuery,
    useGetMealByIdQuery,
    useSearchMealsByNameQuery,
    useGetMealCategoriesQuery,
    useFilterByCategoryQuery,
} = mealApi;