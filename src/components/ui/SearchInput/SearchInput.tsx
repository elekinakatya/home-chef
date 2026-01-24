import styles from './SearchInput.module.css'
import search from '../../../assets/image/search.svg'

export const SearchInput = () => {
    return (
        <div className={styles.searchInput}>
            <img src={search} alt="magnifying glass" className={styles.icon}/>
            <input
                type="text"
                placeholder="Search recipes and more..."
                className={styles.input}
        />
</div>
)
}