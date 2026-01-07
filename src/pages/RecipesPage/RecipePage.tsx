import {RecipeCard} from "../../components/ui/RecipeCard/RecipeCard.tsx";
import {recipeMock} from "../../entities/recipe/mocks.ts";
import {Hero} from "../../components/layout/Hero/Hero.tsx";

export const RecipePage = () => {
    return (
        <div style={{paddingTop:"80px"}}>
            <Hero/>
            {recipeMock.map((recipe) => (
                <RecipeCard key = {recipe.id} recipe={recipe} />
            ))}
        </div>
    )
}