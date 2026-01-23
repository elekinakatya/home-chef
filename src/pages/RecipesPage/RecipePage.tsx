import styles from './RecipePage.module.css'
import {RecipeCard} from "../../components/ui/RecipeCard/RecipeCard.tsx";
import {mockCategory, recipeMock} from "../../entities/recipe/mocks.ts";
import {Hero} from "../../components/layout/Hero/Hero.tsx";
import {useEffect, useState} from "react";
import {Categories} from "../../components/ui/Categories/Categories.tsx";

export const RecipePage = () => {

    const [heroSlide, setHeroSlide] = useState(false)
    useEffect(() => {
        window.scrollTo(0, 0); //временно! пока хз как сделать норм анимацию
    },[])
    
    return (
        <>
            <Hero onSlideStart={() => setHeroSlide(true)}
               />
            <div className={styles.page}>
                <div className={styles.category}>
                    {mockCategory.map((category) => (
                        <Categories category={category} key={category.idCategory}/>
                    ))}
                </div>
                <div className={heroSlide ? styles.cardsAnimated : styles.cards}>
                    {recipeMock.map((recipe) => (
                        <RecipeCard key = {recipe.id} recipe={recipe} />
                    ))}
                </div>
            </div>
        </>
    )
}