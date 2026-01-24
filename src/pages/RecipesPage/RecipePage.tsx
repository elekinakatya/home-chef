import styles from './RecipePage.module.css'
import {RecipeCard} from "../../components/ui/RecipeCard/RecipeCard.tsx";
import {Hero} from "../../components/layout/Hero/Hero.tsx";
import {useEffect, useState} from "react";
import {Categories} from "../../components/ui/Categories/Categories.tsx";
import {
    useFilterByCategoryQuery,
    useGetMealCategoriesQuery,
} from "../../store/api/mealApi.ts";
import type {Category, Recipe} from "../../entities/recipe/types.ts";
import {SearchInput} from "../../components/ui/SearchInput/SearchInput.tsx";

export const RecipePage = () => {
    const [selectedCategory, setSelectedCategory] = useState('Dessert');
    const [heroSlide, setHeroSlide] = useState(false)
    useEffect(() => {
        window.scrollTo(0, 0); //временно! пока хз как сделать норм анимацию
    },[])
    const { data: mealsData,
         isLoading: isMealsLoading,
            isError: mealsError} = useFilterByCategoryQuery(selectedCategory);
    const { data: categoriesData,
        isLoading: isCategoriesLoading,
        isError: isCategoriesError, } = useGetMealCategoriesQuery();


    if (isMealsLoading || isCategoriesLoading) {
        return <div>Loading...</div>;
    }
    if (mealsError || isCategoriesError) {
        return <div>Error loading data</div>;
    }

    const recipe: Recipe[] = mealsData? mealsData.meals.map((meal) => ({
            id: meal.idMeal,
            title: meal.strMeal,
            cookTime: 30,
            image: meal.strMealThumb,
            serving: 2,
    })) : [];

    const categories: Category[] = categoriesData ? categoriesData.categories : [];
    return (
        <>
            <Hero onSlideStart={() => setHeroSlide(true)}/>
            <div className={styles.page}>
                <div className={styles.category}>
                    <h1 className={styles.title}>Recipes</h1>
                    {categories.map((category) => (
                        <Categories
                            category={category}
                            key={category.idCategory}
                            isActive={selectedCategory === category.strCategory}
                            onClick={() => {setSelectedCategory(category.strCategory)}}
                        />
                    ))}
                </div>
                <div className={styles.centerPage}>
                    <SearchInput></SearchInput>
                    <div className={heroSlide ? styles.cardsAnimated : styles.cards}>
                        {recipe.map((recipe) => (
                            <RecipeCard key = {recipe.id} recipe={recipe} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}