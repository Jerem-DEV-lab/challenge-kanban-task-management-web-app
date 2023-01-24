import {PropsWithChildren} from "react";
import clsx from "clsx";
import {ButtonAttributes} from '@kanban/typescript';
import Styles from '../../styles/components/button/button.module.scss'

export const Button = (
    {
        children,
        className = undefined,
        fullWidth,
        disabled = false,
        outlined, onClick
    }: PropsWithChildren<ButtonAttributes & { outlined?: boolean }>) => {
    return <button
        disabled={disabled}
        onClick={onClick}
        className={clsx(className && className, Styles.ButtonWithLabel, outlined && Styles.OutlinedButton, disabled && Styles.ButtonDisabled, fullWidth && Styles.FullWidth)}>
        {children}
    </button>
}
