import {RecipeDetail} from "@/components/ui/RecipeDetail/RecipeDetail.tsx";
import {useParams} from "react-router-dom";
import {useGetMealByIdQuery} from "@/store/api/mealApi.ts";


export const RecipeDetailPage = () => {
    const { id } = useParams<{ id: string }>();
    const { data, isLoading, isError } = useGetMealByIdQuery(id!);

    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (isError) {
        return <div>Error loading data</div>;
    }

    const meal = data?.meals?.[0];
    if (!meal) {
        return <div>Meal not found</div>;
    }

    return <RecipeDetail details={meal}/>
}