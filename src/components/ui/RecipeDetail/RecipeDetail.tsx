import styles from "./RecipeDetail.module.css";
import backIcon from "../../../assets/icons/back.svg"
import type {MealInfo} from "../../../entities/recipe/types.ts"
import {getMealIngredients} from "../../../entities/recipe/lib/getMealIngredients.ts";
import {useNavigate} from "react-router-dom";

interface DetailsProps {
    details: MealInfo;
}

export const RecipeDetail = ({details}: DetailsProps) => {
    const {
        strArea,
        strTags,
        strMeal,
        strCategory,
        strInstructions,
        strMealThumb,
        strYoutube,
        strSource} = details;

    const ingredients = getMealIngredients(details);
    const navigate = useNavigate();

    return (
        <div className={styles.card}>
                <div className={styles.topRow}>
                    <button className={styles.back}
                    onClick={() => navigate(-1)}
                    >
                        <img src={backIcon} alt={"back"} />
                    </button>

                    <h1 className={styles.title}>{strMeal}</h1>

                    <div className={styles.badges}>
                        {strArea && <p className={styles.badge}> {strArea}</p>}
                        {strCategory && <p className={styles.badge}>{strCategory}</p>}
                        {strTags && <p className={styles.badge}>{strTags}</p>}
                    </div>
                </div>

            <div className={styles.content}>
                <div className={styles.left}>
                    <div className={styles.media}>
                        <img src={strMealThumb} alt={strMeal} className={styles.image}/>

                        <div className={styles.ingredients}>
                            <h2>Ingredients</h2>
                            <ul>
                                {ingredients.map((item, index) => (
                                    <li key={index}>{item.ingredients} — {item.measure}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className={styles.links}>
                        {strSource && <a href={strSource}>Source</a>}
                        {strYoutube && <a href={strYoutube}>Youtube</a>}
                    </div>
                </div>

                <div className={styles.right}>
                    <h2>Instructions</h2>
                    {strInstructions.split("\n").map((step, i) =>
                        (<p key={i}>{step}</p>))}
                </div>
            </div>
        </div>
    )
}