import styles from "./RecipeDetail.module.css";
import type {MealInfo} from "../../../entities/recipe/types.ts"
interface DetailsProps {
    details: MealInfo;

}

export const RecipeDetail = ({details}: DetailsProps) => {
    const {idMeal, strMeal,strCategory,strArea} = details;
    return (
        <div className={styles.card}>
            <h3></h3>
        </div>
    )
}