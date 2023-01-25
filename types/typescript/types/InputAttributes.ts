import type {ChangeEvent} from "react";

export type TextareaProps = {
    name: string,
    placeholder?: string,
    value?: string,
    defaultValue?: string,
    onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void,
    className?: string,
    rows?: number
}
export type InputAttributes = {
    name: string,
    inputType?: string,
    placeholder?: string,
    value?: string,
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void,
    className?: string,
}

export type InputGroupProps = {
    label: string,
} & InputAttributes
