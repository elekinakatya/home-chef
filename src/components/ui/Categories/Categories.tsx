import type {Category} from "../../../entities/recipe/types.ts";
import styles from './Categories.module.css'

interface CategoryProps {
    category: Category;
    onClick?: () => void;
    isActive?: boolean;
}
export const Categories= ({category, onClick, isActive}: CategoryProps) => {
    const {strCategory, strCategoryThumb} = category;
    return (
        <button
            type={"button"}
            onClick={onClick}
            className={`${styles.categoryButton} ${isActive ? styles.active : ''}`}
        >
                <div className={styles.cardCategory}>
                    <img src={strCategoryThumb} alt={strCategory} className={styles.image}/>
                    <p className={styles.title}>{strCategory}</p>
                </div>
        </button>
    )
}