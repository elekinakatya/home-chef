import {RecipeCard} from "../../components/ui/RecipeCard/RecipeCard.tsx";
import {recipeMock} from "../../entities/recipe/mocks.ts";
import {Header} from "../../components/layout/Header/Header.tsx";

export const RecipePage = () => {
    return (
        <div>
            <Header />
            {recipeMock.map((recipe) => (
                <RecipeCard key = {recipe.id} recipe={recipe} />
            ))}
        </div>
    )
}