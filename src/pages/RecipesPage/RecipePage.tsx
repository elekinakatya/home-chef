import styles from './RecipePage.module.css'
import {RecipeCard} from "../../components/ui/RecipeCard/RecipeCard.tsx";
import {Hero} from "../../components/layout/Hero/Hero.tsx";
import {useEffect, useState} from "react";
import {Categories} from "../../components/ui/Categories/Categories.tsx";
import {
    useFilterByAreaQuery,
    useFilterByCategoryQuery,
    useGetMealCategoriesQuery, useSearchMealsByNameQuery,
} from "../../store/api/mealApi.ts";
import type {Category, Recipe} from "../../entities/recipe/types.ts";
import {SearchInput} from "../../components/ui/SearchInput/SearchInput.tsx";
import {CountrySelect} from "../../components/ui/CountrySelect/CountrySelect.tsx";


export const RecipePage = () => {
    const [selectedCategory, setSelectedCategory] = useState('Dessert');
    const [heroSlide, setHeroSlide] = useState(false)
    const [search, setSearch] = useState('')
    const [selectedArea, setSelectedArea] = useState('');


    useEffect(() => {
        window.scrollTo(0, 0); //временно! пока хз как сделать норм анимацию
    },[])

    const normalizedSearch = search.trim();
    const { data: mealsData,
         isLoading: isMealsLoading,
            isError: mealsError} = useFilterByCategoryQuery(selectedCategory, {
        skip: normalizedSearch.length>0 || selectedArea.length > 0,
    });
    const { data: categoriesData,
        isLoading: isCategoriesLoading,
        isError: isCategoriesError, } = useGetMealCategoriesQuery();

    const { data: searchData,
        isLoading: isSearchLoading,
        isError: searchError
    } = useSearchMealsByNameQuery(normalizedSearch, {
        skip: normalizedSearch.length === 0,
    })
    const { data: areaData, isLoading: isAreaLoading} = useFilterByAreaQuery(selectedArea, {
        skip: selectedArea.length === 0,
    })

    const isInitialLoading = !categoriesData && (isMealsLoading || isCategoriesLoading || isSearchLoading || isAreaLoading);

    if (isInitialLoading) {
        return <div>Loading...</div>;
    }
    if (mealsError || isCategoriesError || searchError) {
        return <div>Error loading data</div>;
    }

    let recipe: Recipe[] = [];
    if (areaData?.meals && selectedArea.length > 0) {
        recipe = areaData.meals.map((meal) => ({
            id: meal.idMeal,
            title: meal.strMeal,
            cookTime: 30,
            image: meal.strMealThumb,
            serving: 2,
        }));

    }else if (searchData?.meals && normalizedSearch.length > 0) {
        recipe = searchData.meals.map((meal) => ({
            id: meal.idMeal,
            title: meal.strMeal,
            cookTime: 30,
            image: meal.strMealThumb,
            serving: 2,
        }));
    }else if(mealsData?.meals){
        recipe = mealsData.meals.map((meal) => ({
            id: meal.idMeal,
            title: meal.strMeal,
            cookTime: 30,
            image: meal.strMealThumb,
            serving: 2,
        }));
    }
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
                            isActive={selectedCategory === category.strCategory && normalizedSearch.length===0}
                            onClick={() => {
                                setSelectedCategory(category.strCategory);
                                setSearch('');
                            }}
                        />
                    ))}
                </div>
                <div className={styles.centerPage}>
                    <div className={styles.filtersRow}>
                        <SearchInput
                            value={search}
                            onChange={setSearch}
                        ></SearchInput>
                        <CountrySelect
                            value={selectedArea}
                            onChange={(area) => {
                                setSelectedArea(area || '');
                                setSearch('');
                            }}
                        />
                    </div>

                    <div className={`${styles.cards} ${heroSlide ? styles.cardsAnimated : ''}`}>
                        {recipe.map((recipe) => (
                            <RecipeCard key = {recipe.id} recipe={recipe} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}