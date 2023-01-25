import type {ChangeEvent} from "react";
import Styles from "../../styles/components/input/input-group.module.scss";

type SelectInputProps = {
    name: string,
    options: string[],
    onChange?: (e: ChangeEvent<HTMLSelectElement>) => void,
    className?: string,
    defaultValue?: string,
    placeholder?: string,
    label: string[]
}
export const SelectInput = (props: SelectInputProps) => {
    return <select {...props} className={Styles.Input}>
        {props.placeholder &&
            <option defaultValue={props.placeholder} value={props.placeholder} disabled>{props.placeholder}</option>}
        {props.options?.map((option, index) => (
            <option key={index} value={option}>{props.label[index]}</option>))}
    </select>
}
