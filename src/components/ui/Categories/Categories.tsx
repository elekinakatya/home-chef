import {Frame} from "../Frame/Frame.tsx";
import type {Category} from "../../../entities/recipe/types.ts";
import styles from './Categories.module.css'

interface CategoryProps {
    category: Category;
}
export const Categories= ({category}: CategoryProps) => {
    const {strCategory, strCategoryThumb} = category;
    return (
        <Frame>
            <div className={styles.cardCategory}>
                <img src={strCategoryThumb} alt={strCategory} className={styles.image}/>
                <p className={styles.title}>{strCategory}</p>
            </div>
        </Frame>
    )
}