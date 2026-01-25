import styles from './CountrySelect.module.css'
import {useGetAreasListQuery} from "../../../store/api/mealApi.ts";

interface CountrySelectProps {
    value?: string;
    onChange: (value: string) => void;
}


export const CountrySelect = ({value, onChange}: CountrySelectProps) => {
    const {data: areasData} =  useGetAreasListQuery();
    return (
        <div className={styles.container}>

            <select
                className={styles.select}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            >
                <option value=''>All countries</option>
                {areasData?.meals.map((area) => (
                    <option key={area.strArea} value={area.strArea}>
                        {area.strArea}
                    </option>
                ))}
            </select>
        </div>
    )
}