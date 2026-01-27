import styles from './CountrySelect.module.css'
import {useGetAreasListQuery} from "../../../store/api/mealApi.ts";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
    SelectGroup,
    SelectLabel
} from "@/components/ui/select"
interface CountrySelectProps {
    value?: string;
    onChange: (value: string) => void;
}


export const CountrySelect = ({value, onChange}: CountrySelectProps) => {
    const {data: areasData} =  useGetAreasListQuery();
    return (
        <div className={styles.container}>
            <Select
                value={value}
                onValueChange={onChange}>
                <SelectTrigger className="border border-[0.5px] border-[#383333]/42 rounded-[30px] focus:border-[#FEBD2F] text-[#383333]/42"
                               style={{
                                   width: '180px',
                                   height: '45px',
                                   minHeight: '45px',
                                   lineHeight: '1.2'
                               }}>
                    <SelectValue placeholder="All countries" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="all">
                        All countries
                    </SelectItem>
                    <SelectGroup>
                        <SelectLabel>Countries</SelectLabel>
                        {areasData?.meals.map((area) => (
                            <SelectItem key={area.strArea} value={area.strArea} className="z-100">
                                {area.strArea}
                            </SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    )
}