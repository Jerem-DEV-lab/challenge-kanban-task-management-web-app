import type {ChangeEvent} from "react";
import Styles from "../../styles/components/input/input-group.module.scss";
import {Input} from "./Input";
type TextareaProps = {
    label: string,
    name: string,
    placeholder?: string,
    value?: string,
    defaultValue?:string,
    onChange?:(e: ChangeEvent<HTMLTextAreaElement>) => void,
    className?: string,
    rows?: number
}
type InputGroupProps = {
    label: string,
    name: string,
    inputType?: string,
    placeholder?: string,
    value?: string,
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void,
    className?: string,
}
export const InputGroup = (
    {
        label,
        placeholder,
        inputType,
        name,
        value,
        onChange
    }: InputGroupProps) => {
    return <div className={Styles.InputGroupWrapper}>
        <label className={Styles.Label} htmlFor={name}>{label}</label>
        <Input name={name} placeholder={placeholder} onChange={onChange} value={value} inputType={inputType} />
    </div>
}

export const TextareaGroup = (
    {
        label,
        placeholder,
        name,
        value,
        onChange,
        rows = 6
    }: TextareaProps) => {
    return <div className={Styles.InputGroupWrapper}>
        <label className={Styles.Label} htmlFor={name}>{label}</label>
        <textarea
            className={Styles.Input}
            name={name}
            rows={rows}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    </div>
}
