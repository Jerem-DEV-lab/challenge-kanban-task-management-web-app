import Styles from "../../styles/components/input/input-group.module.scss";
import {InputAttributes, TextareaProps} from "@kanban/typescript"

export const Input = (
    {
        placeholder,
        inputType,
        name,
        value,
        onChange
    }: InputAttributes) => {
    return <input
        className={Styles.Input}
        type={inputType}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
    />
}

export const TextareaGroup = (
    {
        placeholder,
        name,
        value,
        onChange,
        rows = 6
    }: TextareaProps) => {
    return <textarea
        className={Styles.Input}
        name={name}
        rows={rows}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
    />
}
