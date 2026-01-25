import styles from './SearchInput.module.css'
import search from '../../../assets/image/search.svg'

interface SearchInputProps {
    value?: string;
    onChange: (value: string) => void;
}
export const SearchInput = ({value, onChange}: SearchInputProps) => {
    return (
        <div className={styles.searchInput}>
            <img src={search} alt="magnifying glass" className={styles.icon}/>
            <input
                type="text"
                placeholder="Search recipes and more..."
                className={styles.input}
                value={value}
                onChange={(e) => onChange(e.target.value)}
        />
</div>
)
}