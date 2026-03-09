import styles from './RecipePage.module.css';
import { RecipeCard } from "../../components/ui/RecipeCard/RecipeCard.tsx";
import { Hero } from "../../components/layout/Hero/Hero.tsx";
import { useEffect, useRef, useState, useMemo } from "react";
import { Categories } from "../../components/ui/Categories/Categories.tsx";
import {
    useFilterByAreaQuery,
    useFilterByCategoryQuery,
    useGetMealCategoriesQuery,
    useSearchMealsByNameQuery,
} from "../../store/api/mealApi.ts";
import type { Category, Recipe } from "../../entities/recipe/types.ts";
import { SearchInput } from "../../components/ui/SearchInput/SearchInput.tsx";
import { CountrySelect } from "../../components/ui/CountrySelect/CountrySelect.tsx";
import { useSearchParams } from "react-router-dom";

export const RecipePage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const selectedCategory = searchParams.get('category') || 'Dessert';
    const selectedArea = searchParams.get('area') ?? '';
    const search = searchParams.get('search') ?? '';
    const normalizedSearch = search.trim();

    const [visibleCount, setVisibleCount] = useState(6);
    const loadMoreRef = useRef<HTMLDivElement | null>(null);
    const [heroSlide, setHeroSlide] = useState(false);


    const { data: mealsData, isLoading: isMealsLoading, isError: mealsError } = useFilterByCategoryQuery(selectedCategory, {
        skip: normalizedSearch.length > 0 || selectedArea.length > 0,
    });
    const { data: categoriesData, isLoading: isCategoriesLoading, isError: isCategoriesError } = useGetMealCategoriesQuery();
    const { data: searchData, isLoading: isSearchLoading, isError: searchError } = useSearchMealsByNameQuery(normalizedSearch, {
        skip: normalizedSearch.length === 0,
    });
    const { data: areaData, isLoading: isAreaLoading } = useFilterByAreaQuery(selectedArea, {
        skip: selectedArea.length === 0,
    });

    const recipe: Recipe[] = useMemo(() => {
        let arr: Recipe[] = [];
        if (areaData?.meals && selectedArea.length > 0) {
            arr = areaData.meals.map(meal => ({
                id: meal.idMeal,
                title: meal.strMeal,
                cookTime: 30,
                image: meal.strMealThumb,
                serving: 2,
            }));
        } else if (searchData?.meals && normalizedSearch.length > 0) {
            arr = searchData.meals.map(meal => ({
                id: meal.idMeal,
                title: meal.strMeal,
                cookTime: 30,
                image: meal.strMealThumb,
                serving: 2,
            }));
        } else if (mealsData?.meals) {
            arr = mealsData.meals.map(meal => ({
                id: meal.idMeal,
                title: meal.strMeal,
                cookTime: 30,
                image: meal.strMealThumb,
                serving: 2,
            }));
        }
        return arr;
    }, [areaData, searchData, mealsData, selectedArea, normalizedSearch]);

    useEffect(() => {
        if (!loadMoreRef.current) return;
        const observer = new IntersectionObserver(
            entries => {
                if (entries[0].isIntersecting) {
                    setVisibleCount(prev => Math.min(prev + 6, recipe.length));
                }
            },
            { root: null, rootMargin: "200px", threshold: 0 }
        );

        observer.observe(loadMoreRef.current);
        return () => observer.disconnect();
    }, [recipe.length]);

    const visibleRecipes = recipe.slice(0, visibleCount);
    const categories: Category[] = categoriesData ? categoriesData.categories : [];

    const isInitialLoading = !categoriesData && (isMealsLoading || isCategoriesLoading || isSearchLoading || isAreaLoading);
    if (isInitialLoading) return <div>Loading...</div>;
    if (mealsError || isCategoriesError || searchError) return <div>Error loading data</div>;

    return (
        <>
            <Hero onSlideStart={() => setHeroSlide(true)} />
            <div className={styles.page}>
                <div className={styles.category}>
                    <h1 className={styles.title}>Recipes</h1>
                    {categories.map(category => (
                        <Categories
                            key={category.idCategory}
                            category={category}
                            isActive={selectedCategory === category.strCategory && normalizedSearch.length === 0}
                            onClick={() => setSearchParams({ category: category.strCategory })}
                        />
                    ))}
                </div>
                <div className={styles.centerPage}>
                    <div className={styles.filtersRow}>
                        <SearchInput
                            value={search}
                            onChange={value => setSearchParams(value ? { search: value } : {})}
                        />
                        <CountrySelect
                            value={selectedArea}
                            onChange={area => setSearchParams(area ? { area } : {})}
                        />
                    </div>
                    <div className={`${styles.cards} ${heroSlide ? styles.cardsAnimated : ''}`}>
                        {visibleRecipes.map(recipe => (
                            <RecipeCard key={recipe.id} recipe={recipe} />
                        ))}
                        <div ref={loadMoreRef} className={styles.loadMoreTrigger} />
                    </div>
                </div>
            </div>
        </>
    );
};